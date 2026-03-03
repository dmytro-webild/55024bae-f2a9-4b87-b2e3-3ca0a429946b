"use client";

import { CheckCircle, Heart, Home, Search } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroBillboardTestimonial from "@/components/sections/hero/HeroBillboardTestimonial";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import TestimonialCardSixteen from "@/components/sections/testimonial/TestimonialCardSixteen";
import ContactText from "@/components/sections/contact/ContactText";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";

export default function PetsHavenPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="mediumSizeLargeTitles"
      background="circleGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "home" },
            { name: "Animals", id: "animals" },
            { name: "About", id: "about" },
            { name: "Adopt", id: "adoption" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="Paws Haven"
          bottomLeftText="Making a Difference"
          bottomRightText="hello@pawshaven.org"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          title="Give a Pet a Forever Home"
          description="Meet our loving animals waiting for families who will cherish them. Every pet deserves a second chance at happiness."
          tag="Find Your Match"
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/woman-playing-with-rescue-dogs-shelter_23-2148682984.jpg"
          imageAlt="Shelter animals waiting for adoption"
          mediaAnimation="slide-up"
          background={{ variant: "plain" }}
          testimonials={[
            {
              name: "Sarah Johnson",              handle: "New Pet Parent",              testimonial: "Finding our perfect family member here changed our lives forever!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-stylish-couple-walking-with-dog-street-man-woman-happy-together-with-husky-breed_285396-1635.jpg?_wi=1"},
            {
              name: "Michael Chen",              handle: "Dog Lover",              testimonial: "The team was so helpful through the entire adoption process. Highly recommend!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/affectionate-little-girl-embracing-dog-while-relaxing-by-window-with-her-father_637285-3270.jpg?_wi=1"},
            {
              name: "Emily Rodriguez",              handle: "Cat Enthusiast",              testimonial: "Best decision we've made. Our cat is the sweetest addition to our family.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-holding-her-labrador_23-2148345932.jpg?_wi=1"},
          ]}
          buttons={[
            { text: "Browse Available Pets", href: "#animals" },
            { text: "Learn About Us", href: "#about" },
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="animals" data-section="animals">
        <ProductCardTwo
          title="Meet Our Animals"
          description="Discover the wonderful pets currently available for adoption. Each animal has a unique personality waiting for the right match."
          tag="Available Now"
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          products={[
            {
              id: "1",              brand: "Paws Haven",              name: "Luna - Golden Retriever",              price: "Adoption Fee: $150",              rating: 5,
              reviewCount: "12 interested",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-cute-puppy_181624-21270.jpg",              imageAlt: "Luna the Golden Retriever"},
            {
              id: "2",              brand: "Paws Haven",              name: "Whiskers - Tabby Cat",              price: "Adoption Fee: $75",              rating: 5,
              reviewCount: "8 interested",              imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-woman-holding-tabby-cat_23-2148045665.jpg",              imageAlt: "Whiskers the Tabby Cat"},
            {
              id: "3",              brand: "Paws Haven",              name: "Hoppy - Holland Lop Rabbit",              price: "Adoption Fee: $50",              rating: 5,
              reviewCount: "5 interested",              imageSrc: "http://img.b2bpic.net/free-photo/girl-plays-with-domestic-rabbit-street-pet-concept_169016-62268.jpg",              imageAlt: "Hoppy the Holland Lop Rabbit"},
          ]}
          gridVariant="three-columns-all-equal-width"
          buttons={[{ text: "View Full Catalog", href: "#" }]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Our Mission & Story"
          description="For over 15 years, Paws Haven has been dedicated to rescuing, caring for, and rehoming animals in need. Our passionate team and volunteers work tirelessly to ensure every animal receives the love and attention they deserve before finding their forever homes."
          tag="About Our Shelter"
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/smiley-woman-spending-time-with-cute-rescue-dogs-shelter_23-2148682966.jpg"
          imageAlt="Our dedicated shelter team caring for animals"
          buttons={[{ text: "Become a Volunteer", href: "#volunteer" }]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="adoption" data-section="adoption">
        <FeatureBento
          title="How Adoption Works"
          description="Our simple and transparent adoption process ensures the best matches between pets and their new families."
          tag="Simple Steps"
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          features={[
            {
              title: "Browse & Connect",              description: "Explore our available animals and learn about their personalities, needs, and backgrounds.",              bentoComponent: "reveal-icon",              icon: Search,
            },
            {
              title: "Meet & Greet",              description: "Visit our shelter to meet your potential new family member in person and see if it's the right fit.",              bentoComponent: "reveal-icon",              icon: Heart,
            },
            {
              title: "Application",              description: "Fill out our adoption application to help us ensure a perfect home match for your new pet.",              bentoComponent: "reveal-icon",              icon: CheckCircle,
            },
            {
              title: "Welcome Home",              description: "Complete the process and take your new furry family member home to start your adventure together.",              bentoComponent: "reveal-icon",              icon: Home,
            },
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="Success Stories"
          description="Hear from families whose lives have been transformed by their adopted pets."
          tag="Happy Endings"
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              name: "Sarah & Tom Johnson",              role: "Dog Parents",              company: "Chicago, IL",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-stylish-couple-walking-with-dog-street-man-woman-happy-together-with-husky-breed_285396-1635.jpg?_wi=2"},
            {
              id: "2",              name: "Jessica Martinez",              role: "Cat Lover",              company: "Austin, TX",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/affectionate-little-girl-embracing-dog-while-relaxing-by-window-with-her-father_637285-3270.jpg?_wi=2"},
            {
              id: "3",              name: "David & Lisa Park",              role: "Pet Family",              company: "Seattle, WA",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-holding-her-labrador_23-2148345932.jpg?_wi=2"},
            {
              id: "4",              name: "Michael Thompson",              role: "Dog Enthusiast",              company: "Denver, CO",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-home-near-christmas-tree-with-her-beloved-pet-cat_132075-14792.jpg"},
          ]}
          kpiItems={[
            { value: "2,847", label: "Pets Adopted" },
            { value: "98%", label: "Success Rate" },
            { value: "15+", label: "Years Serving" },
          ]}
        />
      </div>

      <div id="volunteer" data-section="volunteer">
        <ContactText
          text="Want to make a difference? Join our volunteer community and help us care for the animals in our shelter. Whether it's walking dogs, socializing cats, or administrative support, every contribution matters."
          animationType="entrance-slide"
          buttons={[
            { text: "Apply to Volunteer", href: "#" },
            { text: "Donate Supplies", href: "#" },
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about adoption, our shelter, and what to expect."
          tag="Help Center"
          tagAnimation="slide-up"
          textboxLayout="default"
          faqsAnimation="slide-up"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/young-parents-their-small-daughter-enjoying-with-dog-home-grandparents-are-standing-background_637285-5542.jpg"
          imageAlt="Happy family with their adopted pet"
          mediaPosition="right"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",              title: "What is the adoption process?",              content: "Our adoption process is simple: browse available pets, visit to meet them, complete an application, and bring your new family member home. We typically process applications within 1-2 business days."},
            {
              id: "2",              title: "What are the adoption fees?",              content: "Adoption fees vary by animal type. Dogs typically cost $150, cats $75, and small animals like rabbits $50. All fees include initial veterinary care, vaccinations, and microchipping."},
            {
              id: "3",              title: "Can I return an adopted pet?",              content: "Yes, we have a 14-day trial period. If the adoption isn't working out, we'll take the pet back no questions asked and help find a better match."},
            {
              id: "4",              title: "Do you have young puppies and kittens?",              content: "We have animals of all ages available. Young animals often require more training and attention. Our staff can help you find the perfect age match for your lifestyle."},
            {
              id: "5",              title: "Can I volunteer without experience?",              content: "Absolutely! We provide full training for all volunteers. Whether you're experienced with animals or not, we have roles that match your skills and interests."},
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Quick Links",              items: [
                { label: "Browse Pets", href: "#animals" },
                { label: "Adoption Process", href: "#adoption" },
                { label: "Volunteer", href: "#volunteer" },
                { label: "Donate", href: "#" },
              ],
            },
            {
              title: "About Us",              items: [
                { label: "Our Story", href: "#about" },
                { label: "Meet the Team", href: "#" },
                { label: "Success Stories", href: "#testimonials" },
                { label: "Contact Us", href: "#contact" },
              ],
            },
            {
              title: "Resources",              items: [
                { label: "Pet Care Tips", href: "#" },
                { label: "FAQ", href: "#faq" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ],
            },
          ]}
          copyrightText="© 2025 Paws Haven Animal Shelter. All rights reserved with love for our furry friends."
        />
      </div>
    </ThemeProvider>
  );
}
