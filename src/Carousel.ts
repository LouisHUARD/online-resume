export default class Carousel {
    element: Element;

    active_index: number;

    images: NodeListOf<Element> | null;
    paginations: NodeListOf<Element> | null;
    carousel_inner: Element;
    indicators: Element;

    constructor(element: Element) {
        this.element = element;

        this.active_index = -1;

        this.images = null;
        this.paginations = null;

        this.carousel_inner = this.element.querySelector('.carousel-inner')!;
        this.indicators = this.element.querySelector('.carousel-indicators')!;
    }

    setImages(images: Array<string>) {
        let imagesAsHTML = "";
        let allButtons = "";
        let idxButton = 0;


        images.forEach(image => {
            if ((typeof image == "string")) {
                imagesAsHTML += `<div class="carousel-item"><img src="/ressources/img${image}" class="d-block w-100" alt=""></div>`;
                allButtons += `<li data-bs-target="#" data-bs-slide-to="${idxButton++}"></li>`
            }
        });


        this.carousel_inner.innerHTML = imagesAsHTML;
        this.indicators.innerHTML = allButtons;

        this.images = this.element.querySelectorAll('.carousel-item');


        this.paginations = this.indicators.querySelectorAll('li')!;

        this.changeActiveSprite(0);

        //Gestion des paginations

        // paginations[0].classList.add('active');
        this.paginations.forEach(button =>
            button.addEventListener('click', (event) => this.handleClickOnPagin(event))
        )

        const previousButton = this.element.querySelector('.carousel-control-prev')!;
        const nextButton = this.element.querySelector('.carousel-control-next')!;

        previousButton.addEventListener('click', (event) => this.handleClickOnPrevious(event));
        nextButton.addEventListener('click', (event) => this.handleClickOnNext(event));


    }

    handleClickOnPagin(event: Event) {
        event.preventDefault();
        const target = event.currentTarget;
        if (target instanceof HTMLElement) {
            const newActiveIdx: number = parseInt(target.getAttribute("data-bs-slide-to")!, 10);
            this.changeActiveSprite(newActiveIdx);
        }
    }

    handleClickOnPrevious(event: Event) {
        //Le modulo ne fonctionne pas comme prévu ?
        event.preventDefault();
        let newActiveIdx;
        if (this.active_index == 0) {
            newActiveIdx = (this.images!.length) - 1;
        } else {
            newActiveIdx = (this.active_index - 1);
        }
        this.changeActiveSprite(newActiveIdx);
    }

    handleClickOnNext(event: Event) {
        event.preventDefault();
        const newActiveIdx = (this.active_index + 1) % (this.images!.length);
        this.changeActiveSprite(newActiveIdx);
    }

    changeActiveSprite(newActiveIdx: number) {

        // Problème : Activé même si on bouge pas
        // Idée : Mettre à null active_index initial, pour le différentier

        if (newActiveIdx != this.active_index) {
            const formerActiveImg = this.carousel_inner.querySelector('.active');
            // const formerActiveImg=this.sprites![this.active_index];
            formerActiveImg?.classList.remove("active");

            const formerActivePagin = this.indicators.querySelector('.active');
            // const formerActivePagin=this.paginations![this.active_index];
            formerActivePagin?.classList.remove('active');

            const newActiveImg = this.images![newActiveIdx]
            newActiveImg.classList.add('active');
            const newActivePagin = this.paginations![newActiveIdx];
            newActivePagin.classList.add('active');

            this.active_index = newActiveIdx;
        }
    }

    cycleImages(){
        const newActiveIdx = (this.active_index + 1) % (this.images!.length);
        this.changeActiveSprite(newActiveIdx);
        setTimeout(()=>this.cycleImages(), 2500);
    }
}