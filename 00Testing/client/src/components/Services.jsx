import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import "./Services.css";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="service-card">
    <div className={`icon-container ${color}`}>
      {icon}
    </div>
    <div className="service-info">
      <h3 className="service-title">{title}</h3>
      <p className="service-subtitle">{subtitle}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="services-container">
    <div className="services-content">
      <div className="services-description">
        <h1 className="services-title">
          Services that we
          <br />
          continue to improve
        </h1>
        <p className="services-text">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>

      <div className="services-list">
        <ServiceCard
          color="bg-blue"
          title="Security guarantee"
          icon={<BsShieldFillCheck fontSize={21} className="icon-white" />}
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-purple"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="icon-white" />}
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-red"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="icon-white" />}
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
        />
      </div>
    </div>
  </div>
);

export default Services;
