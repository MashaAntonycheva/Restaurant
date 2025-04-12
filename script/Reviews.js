class Reviews {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error(`Container with ID "${containerId}" not found.`);
            return;
        }
        this.reviews = this.container.querySelectorAll('.review-item');
        this.currentIndex = 0;
        this.totalReviews = this.reviews.length;

        this.init();
    }

    init() {
        this.showReview(this.currentIndex);

        this.prevButton = document.getElementById('prev'); // <--- Исправлено
        this.nextButton = document.getElementById('next'); // <--- Исправлено

        this.prevButton.addEventListener('click', () => this.changeReview(-1));
        this.nextButton.addEventListener('click', () => this.changeReview(1));

    }

    changeReview(direction) {
        this.currentIndex = (this.currentIndex + direction + this.totalReviews) % this.totalReviews;
        this.showReview(this.currentIndex);
    }

    showReview(index) {
      for (let i = 0; i < this.totalReviews; i++) {
          if (this.reviews[i]) { // проверка на null
              this.reviews[i].style.display = i === index ? 'block' : 'none';
          }
      }
    }
}

export default Reviews;

