"use client";
import Image from "next/image";
import Link from "next/link";
import Icon from "@components/Icon";
import { Pagination, A11y, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
export default function Services({ services }) {
  return (
    <section className="section expertise-section" id="expertise">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">MORE THAN DEVELOPMENT</span>
            <h2>
              A good partner makes
              <br />
              all the difference.
            </h2>
          </div>
          <p>
            We solve the hard problems behind a simple, seamless experience.
            From the first conversation to life after launch.
          </p>
        </div>
        <div className="expertise-grid">
          {services.map((service, index) => (
            <article className="expertise-card" key={service.title}>
              <div className="expertise-art">
                <Swiper
                  modules={[Pagination, A11y, Keyboard]}
                  keyboard={{ enabled: true, onlyInViewport: true }}
                  pagination={
                    service.images.length > 1 ? { clickable: true } : false
                  }
                >
                  {service.images.map((src, i) => (
                    <SwiperSlide key={src}>
                      <Image
                        src={src}
                        width={600}
                        height={500}
                        alt={`${service.title} illustration ${i + 1}`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="expertise-copy">
                <span className="eyebrow">0{index + 1} / OUR APPROACH</span>
                <h3>{service.title}</h3>
                <p>{service.content}</p>
                {service.button.enable && (
                  <Link href={service.button.link} className="text-link">
                    {service.button.label}
                    <Icon size={16} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
