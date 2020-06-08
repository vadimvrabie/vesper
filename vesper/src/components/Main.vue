<template>
  <div class="container">
    <app-header></app-header>
    <app-herosection></app-herosection>
    <app-client-section></app-client-section>
    <app-about-us></app-about-us>
    <app-counts-section></app-counts-section>
    <app-services-section></app-services-section>
    <app-feature-section></app-feature-section>
    <app-testimonial-section></app-testimonial-section>
    <app-portofolio-section></app-portofolio-section>
    <app-team-section></app-team-section>
    <app-pricing-section></app-pricing-section>
    <app-faq-section></app-faq-section>
    <app-contact-section></app-contact-section>
    <app-more-services-section></app-more-services-section>
    <app-footersection></app-footersection>

  </div>
</template>

<script>
    import Header from '../components/main/Header'
    import HeroSection from "../components/main/HeroSection";
    import ClientSection from "./main/ClientSection";
    import AboutUs from "./main/AboutUs";
    import CountsSection from "./main/CountsSection";
    import ServicesSection from "./main/ServicesSection";
    import MoreServicesSection from "./main/MoreServicesSection";
    import FeatureSection from "./main/FeatureSection";
    import TestimonialSection from "./main/TestimonialSection";
    import PortofolioSection from "./main/PortofolioSection";
    import TeamSection from "./main/TeamSection";
    import PricingSection from "./main/PricingSection";
    import FAQSection from "./main/FAQSection";
    import ContactSection from "./main/ContactSection";

    import FooterSection from "../components/main/FooterSection";

    export default {
               components: {
            appHeader: Header,
            appHerosection: HeroSection,
            appClientSection: ClientSection,
            appAboutUs: AboutUs,
            appCountsSection: CountsSection,
            appServicesSection: ServicesSection,
            appMoreServicesSection:MoreServicesSection,
            appFeatureSection: FeatureSection,
            appTestimonialSection:TestimonialSection,
            appPortofolioSection: PortofolioSection,
            appTeamSection: TeamSection,
            appPricingSection: PricingSection,
            appFaqSection: FAQSection,
            appContactSection: ContactSection,
            appFootersection: FooterSection
        }
    }
</script>

<style>
  body {
    font-family: "Open Sans", sans-serif;
    color: #444444;
  }

  a {
    color: #3498db;
  }

  a:hover {
    color: #5faee3;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Raleway", sans-serif;
  }

  /*--------------------------------------------------------------
  # Back to top button
  --------------------------------------------------------------*/
  .back-to-top {
    position: fixed;
    display: none;
    right: 15px;
    bottom: 15px;
    z-index: 99999;
  }

  .back-to-top i {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background: #3498db;
    color: #fff;
    transition: all 0.4s;
  }

  .back-to-top i:hover {
    background: #57aae1;
    color: #fff;
  }

  /*--------------------------------------------------------------
  # Disable AOS delay on mobile
  --------------------------------------------------------------*/
  @media screen and (max-width: 768px) {
    [data-aos-delay] {
      transition-delay: 0 !important;
    }
  }

  /*--------------------------------------------------------------
  # Breadcrumbs
  --------------------------------------------------------------*/
  .breadcrumbs {
    padding: 15px 0;
    background: #f3f3f3;
    min-height: 40px;
    margin-top: 80px;
  }

  .breadcrumbs h2 {
    font-size: 28px;
    font-weight: 400;
  }

  .breadcrumbs ol {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .breadcrumbs ol li + li {
    padding-left: 10px;
  }

  .breadcrumbs ol li + li::before {
    display: inline-block;
    padding-right: 10px;
    color: #3c3c3c;
    content: "/";
  }

  @media (max-width: 768px) {
    .breadcrumbs .d-flex {
      display: block !important;
    }
    .breadcrumbs ol {
      display: block;
    }
    .breadcrumbs ol li {
      display: inline-block;
    }
  }

</style>
