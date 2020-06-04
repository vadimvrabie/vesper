<template>
  <section id="pricing" class="pricing">
    <div class="container">

      <div class="section-title">
        <h2>Pricing</h2>
        <p>Sit sint consectetur velit nemo qui impedit suscipit alias ea</p>
      </div>

      <div class="row">

        <div class="col-lg-4 col-md-6">
          <div class="box" data-aos="zoom-in-right" data-aos-delay="200">
            <h3>Free</h3>
            <h4><sup>$</sup>0<span> / month</span></h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li class="na">Pharetra massa</li>
              <li class="na">Massa ultricies mi</li>
            </ul>
            <div class="btn-wrap">
              <a href="#" class="btn-buy">Buy Now</a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
          <div class="box recommended" data-aos="zoom-in" data-aos-delay="100">
            <h3>Business</h3>
            <h4><sup>$</sup>19<span> / month</span></h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li class="na">Massa ultricies mi</li>
            </ul>
            <div class="btn-wrap">
              <a href="#" class="btn-buy">Buy Now</a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
          <div class="box" data-aos="zoom-in-left" data-aos-delay="200">
            <h3>Developer</h3>
            <h4><sup>$</sup>29<span> / month</span></h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li>Massa ultricies mi</li>
            </ul>
            <div class="btn-wrap">
              <a href="#" class="btn-buy">Buy Now</a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section><!-- End Pricing Section -->
</template>

<script>
    export default {
        name: "PricingSection"
    }
</script>

<style scoped>
  .pricing .box {
    padding: 20px;
    background: #f9f9f9;
    text-align: center;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    border: 2px solid #f9f9f9;
  }

  .pricing .box h3 {
    font-weight: 400;
    padding: 15px;
    margin-top: 15px;
    font-size: 18px;
    font-weight: 600;
    color: #222222;
  }

  .pricing .box h4 {
    font-size: 42px;
    color: #3498db;
    font-weight: 500;
    font-family: "Open Sans", sans-serif;
    margin-bottom: 20px;
  }

  .pricing .box h4 sup {
    font-size: 20px;
    top: -15px;
    left: -3px;
  }

  .pricing .box h4 span {
    color: #bababa;
    font-size: 16px;
    font-weight: 300;
  }

  .pricing .box ul {
    padding: 0;
    list-style: none;
    color: #222222;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
  }

  .pricing .box ul li {
    padding-bottom: 16px;
  }

  .pricing .box ul i {
    color: #3498db;
    font-size: 18px;
    padding-right: 4px;
  }

  .pricing .box ul .na {
    color: #ccc;
    text-decoration: line-through;
  }

  .pricing .box .btn-wrap {
    padding: 15px;
    text-align: center;
  }

  .pricing .box .btn-buy {
    display: inline-block;
    padding: 10px 40px 12px 40px;
    border-radius: 50px;
    border: 2px solid #3498db;
    color: #3498db;
    font-size: 14px;
    font-weight: 400;
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    transition: 0.3s;
  }

  .pricing .box .btn-buy:hover {
    background: #3498db;
    color: #fff;
  }

  .pricing .recommended {
    border-color: #3498db;
  }

  .pricing .recommended .btn-buy {
    background: #3498db;
    color: #fff;
  }

  .pricing .recommended .btn-buy:hover {
    background: #2383c4;
    border-color: #2383c4;
  }
</style>
