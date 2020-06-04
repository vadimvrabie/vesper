<template>
  <div class="container">
    <app-header></app-header>
    <app-herosection></app-herosection>
    <app-client-section></app-client-section>
    <app-about-us></app-about-us>
    <app-counts-section></app-counts-section>
    <app-services-section></app-services-section>
    <app-footersection></app-footersection>
    <app-feature-section></app-feature-section>
    <app-testimonial-section></app-testimonial-section>
    <app-portofolio-section></app-portofolio-section>
    <app-team-section></app-team-section>
    <app-pricing-section></app-pricing-section>
    <app-faq-section></app-faq-section>
    <app-contact-section></app-contact-section>
    <app-more-services-section></app-more-services-section>

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

</style>
