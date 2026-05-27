import Carousel from "./Carousel";

interface Skill {
    title: string;

}

interface Project{
    title : string;

    tags : Array<string>

    context : string;

    summary : string;

    skills : {
        hardSkills: Array<Skill>;
        softSkills: Array<Skill>;
    }

    personalImplication : string;

    screenCaps: Array<string>;

    analysis: string;
}

class ProjectGallery {
    portfolio: HTMLElement;
    filters:HTMLElement;
    projects: Array<ProjectCard>;
    tags : Set<string>;

    constructor(portfolio: HTMLElement, filters: HTMLElement) {
        this.portfolio=portfolio;
        this.filters=filters;
        this.projects=new Array<ProjectCard>
        this.tags=new Set<string>
        this.generateProjectCards()
    }

    generateProjectCards(){
        fetch("/ressources/json/projects/projects.json").then(res=>{
            return res.json();
        }).then(projects=>{
            projects.forEach( (project:Project) =>{
                this.addProjectCard(project);
                project.tags.forEach(tag => {
                    this.tags.add(tag)
                });
            })
            this.addTagButtons()
        })
    }

    addProjectCard(project: Project): void {
        const projectCard = new ProjectCard(project);
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

    constructor(project: Project){
        this.element=document.createElement('div');
        this.element.classList.add('projectCard');

        this.element.innerHTML=this.buildHTMLTag(project);

        this.imageCarousel = new Carousel(this.element.querySelector('.carousel')!);
        this.imageCarousel.setImages(project.screenCaps)
        this.imageCarousel.cycleImages()

        this.tags = project.tags

        this.element.addEventListener('click', event => this.handleClickOnCard(event))
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

    handleClickOnCard(event: Event){
        event.preventDefault();
        const target = event.target as HTMLElement;
        console.log(target)
    }

    setVisibility(visible:boolean){
        this.element.style.display = visible ? 'block' : 'none'; 
    }

}

console.log('Démarrage portfolio')

const portfolio:HTMLElement=document.querySelector('.portfolio')!
const filters:HTMLElement=document.querySelector('.filters')!
new ProjectGallery(portfolio, filters)