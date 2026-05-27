import Carousel from "./Carousel";

interface Skill {
    title: string;

}

interface Project{
    title : string;

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
    element: HTMLElement;
    projects: Array<ProjectCard>;

    constructor(element: HTMLElement) {
        this.element=element;
        this.projects=new Array<ProjectCard>

        this.generateProjectCards()
    }

    generateProjectCards(){
        fetch("/ressources/json/projects/projects.json").then(res=>{
            return res.json();
        }).then(projects=>{
            projects.forEach( (project:Project) =>{
                this.addProjectCard(project);
            })
        })
    }

    addProjectCard(project: Project): void {
        const projectCard = new ProjectCard(project);
        this.projects.push(projectCard);
        this.element.appendChild(projectCard.element);
    }

}

class ProjectCard{
    element: HTMLElement;
    imageCarousel : Carousel;

    constructor(project: Project){
        this.element=document.createElement('div');
        this.element.classList.add('projectCard');

        this.element.innerHTML=this.buildHTMLTag(project);

        this.imageCarousel = new Carousel(this.element.querySelector('.carousel')!);
        this.imageCarousel.setImages(project.screenCaps)
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
            
            <button class="btn-details">Détails</button>
        `
    }

    handleClickOnCard(event: Event){
        event.preventDefault();
        const target = event.target as HTMLElement;
        console.log(target)
    }

}

console.log('Démarrage portfolio')

new ProjectGallery(document.querySelector('.portfolio')!)