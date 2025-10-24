import styled from "styled-components";

export const StyledPromotion = styled.div`
  height: 350px;
  border: 1px solid var(--dark-100);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  @media (min-width: 768px) {
    height: 500px;
  }
  @media (min-width: 992px) {
    width: 50%;
    height: auto;
  }

  .head {
    position: absolute;
    top: 15px;
    left: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 2;
    
    @media (min-width: 576px) {
      top: 20px;
      left: 20px;
    }

    img {
      width: 30px;
      height: 30px;
    }

    .heading {
      display: block;
      font-size: 20px;
      line-height: 24px;
      font-weight: 600;
    }
  }

  .map-container {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    z-index: 1;
  }

  .leaflet-bottom {
    display: none;
  }
  .leaflet-left .leaflet-control {
    margin: 0;
  }

  .leaflet-top,
  .leaflet-bottom {
    top: auto;
    right: 10px;
    bottom: 10px;
    left: auto;
  }

  .leaflet-marker-icon {
    width: 50px !important;
    height: 50px !important;
    border: 2px solid var(--white);
    border-radius: 50%;
  }

  .leaflet-touch .leaflet-bar a:first-child,
  .leaflet-touch .leaflet-bar a:last-child {
    background: var(--dark-100);
    color: var(--white);
    border-bottom: 0;
    border-radius: 6px;
    margin: 0 0 4px;

    &:hover {
      background: var(--dark-100);
    }
  }
`;
