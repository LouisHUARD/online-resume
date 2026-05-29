import Carousel from "./Carousel";

interface Skill {
    title: string;

}

interface Project{
    title : string;

    context : string;

    tags : Array<string>

    screenCaps: Array<string>;

    summary : string;

    body : string
}

class ProjectGallery {
    portfolio: HTMLElement;
    filters:HTMLElement;
    modal:HTMLElement;

    projects: Array<ProjectCard>;
    tags : Set<string>;

    activeModalCarousel: Carousel | null = null;

    constructor(portfolio: HTMLElement, filters: HTMLElement, modal: HTMLElement) {
        this.portfolio=portfolio;
        this.filters=filters;
        this.modal=modal
        this.projects=new Array<ProjectCard>
        this.tags=new Set<string>
        this.generateProjectCards()


    }

    generateProjectCards(){
        const markdownFiles = import.meta.glob('./projects/*.md', { eager: true });
        console.log(markdownFiles)
        const projects:Array<Project> = Object.values(markdownFiles).map((file: any) => {
        return {
                title: file.attributes.title,
                context: file.attributes.context,
                tags: file.attributes.tags,
                screenCaps: file.attributes.screenCaps,
                summary: file.attributes.summary,
                body: file.html
        };
        });   
        console.log(projects)
        
        projects.forEach( (project:Project) =>{
                this.addProjectCard(project);
                project.tags.forEach(tag => {
                    this.tags.add(tag)
                });
            })
            this.addTagButtons()

    }

    addProjectCard(project: Project): void {

        const openModalCallback = (project : Project) => {
                if (this.activeModalCarousel) {
                    this.activeModalCarousel.destroy();
                }

                const modalBox = this.modal.querySelector('.modal-box')!

                modalBox.innerHTML= `
                <div class="modal-container">
                    <div class="modal-header">
                        <h2>${project.title}</h2>
                        <button class="close-modal">&times;</button>
                    </div>
                    <div class="context">
                        <h3>${project.context}</h3>
                        <p>${project.summary}</p>
                    </div>
                    <div class="carousel modal-carousel">
                        <div class="carousel-indicators"></div>
                        <div class="carousel-inner"></div>
                        <a class="carousel-control-prev" href="#" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        </a>
                        <a class="carousel-control-next" href="#" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        </a>
                    </div>

                    <div class="modal-body">
                        ${project.body}
                    </div>
                </div>
            `;
            const close_button = this.modal.querySelector('.close-modal')!
            close_button.addEventListener('click', (_event)=>{
                this.modal.style.display = "none"

                if (this.activeModalCarousel) {
                    this.activeModalCarousel.destroy();
                    this.activeModalCarousel = null; 
                }
            })

            this.activeModalCarousel = new Carousel(this.modal);
            this.activeModalCarousel.setImages(project.screenCaps);
            this.activeModalCarousel.cycleImages();

            this.modal.style.display = "flex";
        };

        const projectCard = new ProjectCard(project, openModalCallback);
        this.projects.push(projectCard);
        this.portfolio.appendChild(projectCard.element);
    }

    addTagButtons(){
        this.filters.innerHTML+=`<button class="filter-btn" tag='all'>Tous</button>`;

        this.tags.forEach( tag =>{
            this.filters.innerHTML+=`<button class="filter-btn" tag='${tag}'>${tag}</button>`;
        })

        const filter_buttons=this.filters.querySelectorAll('.filter-btn');
        filter_buttons.forEach( button => {
            let tag = button.getAttribute('tag');
            if (tag){
                button.addEventListener('click', (event) => this.filterCards(event));
            }
        } )
    }

    filterCards(event:Event){
        event.preventDefault()
        const formerActive=this.filters.querySelector('button.active')
        if (formerActive) {
            formerActive.classList.remove('active')
        }

        const button=event.currentTarget as HTMLElement;
        button.classList.add('active')
        const tag=button.getAttribute('tag');
        if (tag){
            const displayAll:boolean = (tag=='all');
            console.log('Filtrage sur '+tag);
            console.log(this.projects);
            this.projects.forEach( project => {
                    let visible = displayAll || project.tags.includes(tag);
                    project.setVisibility(visible);
            } )
        }
    }

}

class ProjectCard{
    element: HTMLElement;
    imageCarousel: Carousel;
    tags: Array<string>;

    constructor(project: Project, openModalCallback:(p:Project)=>void){
        this.element=document.createElement('div');
        this.element.classList.add('projectCard');

        this.element.innerHTML=this.buildHTMLTag(project);

        this.imageCarousel = new Carousel(this.element.querySelector('.carousel')!);
        this.imageCarousel.setImages(project.screenCaps)

        this.tags = project.tags

        this.element.addEventListener('click', (event:Event) =>{
            event.preventDefault()
            openModalCallback(project)
        })

        setTimeout(()=>this.imageCarousel.cycleImages(), 3000);
    }

    buildHTMLTag(project:Project){
        return `
            <div class="projectCardTitle"><h3>${project.title}</h3></div>
    
            <div class="carousel">
                <div class="carousel-indicators"></div>
                <div class="carousel-inner"></div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>
    
            <div class="projectCardContent">
                <p>${project.summary}</p>
            </div>
        `
    }

    setVisibility(visible:boolean){
        this.element.style.display = visible ? 'block' : 'none'; 
    }
}

console.log('Démarrage portfolio')

const portfolio:HTMLElement=document.querySelector('.portfolio')!
const filters:HTMLElement=document.querySelector('.filters')!
const modal:HTMLElement=document.querySelector('.modal')!
new ProjectGallery(portfolio, filters, modal)