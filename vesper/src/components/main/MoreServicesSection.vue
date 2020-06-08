<template>
  <section id="more-services" class="more-services">
    <div class="container">

      <div class="row">
        <div class="col-md-6 d-flex align-items-stretch">
          <div class="card" style='background-image: url("../img/more-services-1.jpg");' data-aos="fade-up" data-aos-delay="100">
            <div class="card-body">
              <h5 class="card-title"><a href="">Lobira Duno</a></h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
              <div class="read-more"><a href="#"><i class="icofont-arrow-right"></i> Read More</a></div>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
          <div class="card" style='background-image: url("../img/more-services-2.jpg");' data-aos="fade-up" data-aos-delay="200">
            <div class="card-body">
              <h5 class="card-title"><a href="">Limere Radses</a></h5>
              <p class="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.</p>
              <div class="read-more"><a href="#"><i class="icofont-arrow-right"></i> Read More</a></div>
            </div>
          </div>

        </div>
        <div class="col-md-6 d-flex align-items-stretch mt-4">
          <div class="card" style='background-image: url("../img/more-services-3.jpg");' data-aos="fade-up" data-aos-delay="100">
            <div class="card-body">
              <h5 class="card-title"><a href="">Nive Lodo</a></h5>
              <p class="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</p>
              <div class="read-more"><a href="#"><i class="icofont-arrow-right"></i> Read More</a></div>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex align-items-stretch mt-4">
          <div class="card" style='background-image: url("../img/more-services-4.jpg");' data-aos="fade-up" data-aos-delay="200">
            <div class="card-body">
              <h5 class="card-title"><a href="">Pale Treda</a></h5>
              <p class="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem.</p>
              <div class="read-more"><a href="#"><i class="icofont-arrow-right"></i> Read More</a></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section><!-- End More Services Section -->
</template>

<script>
    export default {
        name: "MoreServicesSection"
    }
</script>

<style scoped>
  .more-services {
    padding-top: 20px;
  }

  .more-services .card {
    border: 0;
    padding: 160px 20px 20px 20px;
    position: relative;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .more-services .card-body {
    z-index: 10;
    background: rgba(255, 255, 255, 0.9);
    padding: 15px 30px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
    transition: ease-in-out 0.4s;
    border-radius: 5px;
  }

  .more-services .card-title {
    font-weight: 700;
    text-align: center;
    margin-bottom: 15px;
  }

  .more-services .card-title a {
    color: #222222;
  }

  .more-services .card-text {
    color: #5e5e5e;
  }

  .more-services .read-more a {
    color: #777777;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    transition: 0.4s;
  }

  .more-services .read-more a:hover {
    text-decoration: underline;
  }

  .more-services .card:hover .card-body {
    background: #3498db;
  }

  .more-services .card:hover .read-more a, .more-services .card:hover .card-title, .more-services .card:hover .card-title a, .more-services .card:hover .card-text {
    color: #fff;
  }
</style>
