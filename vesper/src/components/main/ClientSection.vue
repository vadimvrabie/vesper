<template>
  <section id="clients" class="clients clients">
    <div class="container">

      <div class="row">

        <div class="col-lg-2 col-md-4 col-6">
          <img src="vesper/src/assets/img/clients/client-1.png" class="img-fluid" alt="" data-aos="zoom-in">
        </div>

        <div class="col-lg-2 col-md-4 col-6">
          <img src="assets/img/clients/client-2.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100">
        </div>

        <div class="col-lg-2 col-md-4 col-6">
          <img src="assets/img/clients/client-3.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="200">
        </div>

        <div class="col-lg-2 col-md-4 col-6">
          <img src="assets/img/clients/client-4.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300">
        </div>

        <div class="col-lg-2 col-md-4 col-6">
          <img src="assets/img/clients/client-5.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="400">
        </div>

        <div class="col-lg-2 col-md-4 col-6">
          <img src="assets/img/clients/client-6.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500">
        </div>

      </div>

    </div>
  </section><!-- End Clients Section -->
</template>

<script>
    export default {
        name: "ClientSection"
    }
</script>

<style scoped>
  .clients {
    background: #f3f9fd;
    padding: 10px 0;
    text-align: center;
  }

  .clients .col-lg-2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .clients img {
    width: 50%;
    -webkit-filter: grayscale(100);
    filter: grayscale(100);
    transition: all 0.4s ease-in-out;
    display: inline-block;
    padding: 10px 0;
  }

  .clients img:hover {
    -webkit-filter: none;
    filter: none;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    .clients img {
      width: 40%;
    }
  }

  @media (max-width: 575px) {
    .clients img {
      width: 30%;
    }
  }
</style>
