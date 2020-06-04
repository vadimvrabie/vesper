<template>
  <section id="counts" class="counts">
    <div class="container">

      <div class="row">
        <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
          <img src="assets/img/counts-img.svg" alt="" class="img-fluid">
        </div>

        <div class="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
          <div class="content d-flex flex-column justify-content-center">
            <div class="row">
              <div class="col-md-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <i class="icofont-simple-smile"></i>
                  <span data-toggle="counter-up">65</span>
                  <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                </div>
              </div>

              <div class="col-md-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <i class="icofont-document-folder"></i>
                  <span data-toggle="counter-up">85</span>
                  <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                </div>
              </div>

              <div class="col-md-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <i class="icofont-clock-time"></i>
                  <span data-toggle="counter-up">12</span>
                  <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                </div>
              </div>

              <div class="col-md-6 d-md-flex align-items-md-stretch">
                <div class="count-box">
                  <i class="icofont-award"></i>
                  <span data-toggle="counter-up">15</span>
                  <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                </div>
              </div>
            </div>
          </div><!-- End .content-->
        </div>
      </div>

    </div>
  </section><!-- End Counts Section -->
</template>

<script>
    export default {
        name: "CountsSection"
    }
</script>

<style scoped>
  .counts {
    padding-top: 0;
  }

  .counts .content {
    padding: 0;
  }

  .counts .content h3 {
    font-weight: 700;
    font-size: 34px;
    color: #222222;
  }

  .counts .content p {
    margin-bottom: 0;
  }

  .counts .content .count-box {
    padding: 20px 0;
    width: 100%;
  }

  .counts .content .count-box i {
    display: block;
    font-size: 36px;
    color: #3498db;
    float: left;
  }

  .counts .content .count-box span {
    font-size: 36px;
    line-height: 30px;
    display: block;
    font-weight: 700;
    color: #222222;
    margin-left: 50px;
  }

  .counts .content .count-box p {
    padding: 15px 0 0 0;
    margin: 0 0 0 50px;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    color: #484848;
  }

  .counts .content .count-box a {
    font-weight: 600;
    display: block;
    margin-top: 20px;
    color: #484848;
    font-size: 15px;
    font-family: "Poppins", sans-serif;
    transition: ease-in-out 0.3s;
  }

  .counts .content .count-box a:hover {
    color: #6f6f6f;
  }

  @media (max-width: 1024px) {
    .counts .image {
      text-align: center;
    }
    .counts .image img {
      max-width: 70%;
    }
  }

  @media (max-width: 667px) {
    .counts .image img {
      max-width: 100%;
    }
  }
</style>
