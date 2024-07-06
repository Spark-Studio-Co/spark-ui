import React, { useState } from "react";
import useWindowSize from "../../useWindowSize";
import { getBreakpoint } from "@/utils/getBreakpoint";
import { useStyle } from "../../styleContext";
import { DeviceSize } from "@/types/deviceSize";

interface ResponsiveProperties {
  logoWidth?: string;
  logoHeight?: string;
  fontSize?: string;
  buttonWidth?: string;
  buttonHeight?: string;
  buttonFontSize?: string;
  burgerLineHeight?: string;
  buttonMargin?: string;
  navigationGap?: string;
  navigationPadding?: string;
  linkMargin?: string;
  linkPadding?: string;
  linkWidth?: string;
  linkHeight?: string;
  buttonBorderRadius?: string;
  buttonPadding?: string;
  burgerContainerHeight?: string;
  burgerContainerWidth?: string;
  burgerContainerMargin?: string;
  containerWidth?: string;
  linkBorderRadius?: string;
  linkFontSize?: string;
  containerMargin?: string;
}

interface LinkProps {
  text: string;
  href: string;
}

interface Link {
  isBurgerMenu: boolean;
  linkHoverBackgroundColor?: string;
  linkBackgroundColor?: string;
  linkHoverBorder?: string;
  linkBorder?: string;
  linkHoverColor?: string;
  linkColor?: string;
  linkFontWeight?: string;
  linkFontFamily?: string;
  linkTextDecoration?: string;
  linkTransition?: string;
  logo?: string;
  links: LinkProps[];
  responsive: Partial<Record<DeviceSize, ResponsiveProperties>>;
  hoverButtonBackgroundColor?: string;
  buttonBackgroundColor?: string;
  buttonFontWeight?: string;
  buttonFontFamily?: string;
  buttonTextDecoration?: string;
  burgerLineColor?: string;
  buttonText: string;
  buttonHref: string;
  buttonHoverBorder?: string;
  headerPosition?: any;
  buttonBorder?: string;
  buttonHoverColor?: string;
  buttonColor?: string;
  buttonTransition?: string;
  logoHref?: string;
  headerZindex?: string;
  menuBackground?: string;
  headerTop?: string;
}

export const HeaderMobile: React.FC<Link> = ({
  logoHref,
  logo,
  links,
  responsive,
  buttonHref,
  menuBackground,
  buttonText,
  buttonBackgroundColor,
  buttonBorder,
  headerPosition,
  linkFontFamily,
  linkFontWeight,
  linkTextDecoration,
  linkTransition,
  headerTop,
  headerZindex,
  buttonColor,
  buttonHoverColor,
  linkBackgroundColor,
  linkBorder,
  linkColor,
  linkHoverBackgroundColor,
  linkHoverBorder,
  linkHoverColor,
  isBurgerMenu,
  hoverButtonBackgroundColor,
  buttonHoverBorder,
  buttonTransition,
  burgerLineColor,
  buttonTextDecoration,
  buttonFontFamily,
  buttonFontWeight,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { width: windowWidth } = useWindowSize();
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoverStates, setHoverStates] = React.useState<boolean[]>(
    new Array(links.length).fill(false)
  );

  const handleMouseEnter = (index: number) => {
    const updatedStates = [...hoverStates];
    updatedStates[index] = true;
    setHoverStates(updatedStates);
  };

  const handleMouseLeave = (index: number) => {
    const updatedStates = [...hoverStates];
    updatedStates[index] = false;
    setHoverStates(updatedStates);
  };

  const handleBurgerClick = () => {
    setIsActive(!isActive);
    setIsOpen(!isOpen);
  };

  const styles = useStyle({
    contactlinkbutton: {
      color: isHovered ? buttonHoverColor : buttonColor,
      transition: buttonTransition,
      textDecoration: buttonTextDecoration,
      border: isHovered ? buttonHoverBorder : buttonBorder,
      backgroundColor: isHovered
        ? hoverButtonBackgroundColor
        : buttonBackgroundColor,
      fontWeight: buttonFontWeight,
      fontFamily: buttonFontFamily,
    },
    navlinkbutton: {
      fontWeight: linkFontWeight,
      fontFamily: linkFontFamily,
      textDecoration: linkTextDecoration,
      transition: linkTransition,
    },
  });

  const getResponsiveProperty = (
    property: keyof ResponsiveProperties,
    defaultValue: string
  ): string => {
    const breakpoint: DeviceSize = getBreakpoint(windowWidth) as DeviceSize;
    return responsive[breakpoint]?.[property] || defaultValue;
  };

  const getLogoWidth = () => getResponsiveProperty("logoWidth", "auto");
  const getLogoHeight = () => getResponsiveProperty("logoHeight", "auto");
  const getContainerWidth = () =>
    getResponsiveProperty("containerWidth", "90%");

  return (
    <header
      style={{
        width: "100%",
        position: headerPosition,
        zIndex: headerZindex,
        top: headerTop,
      }}
    >
      <div
        style={{
          margin: getResponsiveProperty("containerMargin", "auto"),
          width: getContainerWidth(),
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a href={logoHref} style={{ scrollBehavior: "smooth" }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: getLogoWidth(),
              height: getLogoHeight(),
            }}
          />
        </a>
        {isBurgerMenu ? (
          <div
            style={{
              cursor: "pointer",
              height: getResponsiveProperty("burgerContainerHeight", "20px"),
              width: getResponsiveProperty("burgerContainerWidth", "20px"),
              margin: getResponsiveProperty("burgerContainerMargin", "auto"),
              overflow: "visible",
              position: "relative",
              zIndex: "9999",
            }}
            onClick={() => handleBurgerClick()}
          >
            <span
              style={{
                background: burgerLineColor,
                display: "block",
                height: getResponsiveProperty("burgerLineHeight", "2px"),
                position: "absolute",
                transition: "0.3s ease-in-out",
                width: "27px",
                top: isActive ? "0px" : "-8px", // Toggle position based on active state
                transform: isActive ? "rotate(45deg)" : "none",
              }}
            ></span>
            <span
              style={{
                background: burgerLineColor,
                display: "block",
                height: getResponsiveProperty("burgerLineHeight", "2px"),
                position: "absolute",
                transition: "0.3s ease-in-out",
                width: "27px",
                opacity: isActive ? 0 : 1,
                top: "0px",
              }}
            ></span>
            <span
              style={{
                background: burgerLineColor,
                display: "block",
                height: getResponsiveProperty("burgerLineHeight", "2px"),
                position: "absolute",
                transition: "0.3s ease-in-out",
                width: "27px",
                top: isActive ? "0px" : "8px",
                transform: isActive ? "rotate(-45deg)" : "none",
              }}
            ></span>
            {isOpen && (
              <div
                style={{
                  position: "absolute",
                  background: menuBackground,
                  width: "100%",
                  height: "100vh",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                  zIndex: "1000",
                  overflow: "hidden",
                }}
              >
                <nav
                  style={{
                    gap: getResponsiveProperty("navigationGap", "20px"),
                    display: "flex",
                    flexDirection: "column",
                    padding: getResponsiveProperty("navigationPadding", "20px"),
                  }}
                >
                  {links.map((link, index) => (
                    <a
                      href={link.href}
                      key={index}
                      style={{
                        ...styles.navlinkbutton,
                        margin: getResponsiveProperty("linkMargin", "0 10px"),
                        backgroundColor: hoverStates[index]
                          ? linkHoverBackgroundColor
                          : linkBackgroundColor,
                        fontSize: getResponsiveProperty("linkFontSize", "16px"),
                        padding: getResponsiveProperty(
                          "linkPadding",
                          "10px 20px"
                        ),
                        width: getResponsiveProperty("linkWidth", "auto"),
                        height: getResponsiveProperty("linkHeight", "auto"),
                        border: hoverStates[index]
                          ? linkHoverBorder
                          : linkBorder,
                        borderRadius: getResponsiveProperty(
                          "linkBorderRadius",
                          "5px"
                        ),
                        color: hoverStates[index] ? linkHoverColor : linkColor,
                      }}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                      role="button"
                    >
                      {link.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>
        ) : (
          <a
            href={buttonHref}
            style={{
              ...styles.contactlinkbutton,
              padding: getResponsiveProperty("buttonPadding", "10px 20px"),
              fontSize: getResponsiveProperty("buttonFontSize", "16px"),
              margin: getResponsiveProperty("buttonMargin", "0 10px"),
              width: getResponsiveProperty("buttonWidth", "auto"),
              height: getResponsiveProperty("buttonHeight", "auto"),
              borderRadius: getResponsiveProperty("buttonBorderRadius", "5px"),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="button"
          >
            {buttonText}
          </a>
        )}
      </div>
    </header>
  );
};
