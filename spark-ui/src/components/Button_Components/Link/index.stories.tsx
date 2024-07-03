import type { Meta, StoryObj } from "@storybook/react";
import { LinkButton } from "./index";

const meta: Meta<typeof LinkButton> = {
  title: "Buttons/LinkButton",
  component: LinkButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const responsiveSettings = {
  xxs: {
    width: "80px",
    height: "40px",
    fontSize: "12px",
    borderRadius: "4px",
    margin: "5px",
    padding: "5px 10px",
  },
  xs: {
    width: "100px",
    height: "45px",
    fontSize: "14px",
    borderRadius: "4px",
    margin: "5px",
    padding: "6px 12px",
  },
  s: {
    width: "120px",
    height: "50px",
    fontSize: "16px",
    borderRadius: "4px",
    margin: "6px",
    padding: "7px 14px",
  },
  m: {
    width: "140px",
    height: "55px",
    fontSize: "18px",
    borderRadius: "5px",
    margin: "7px",
    padding: "8px 16px",
  },
  sm: {
    width: "160px",
    height: "60px",
    fontSize: "20px",
    borderRadius: "5px",
    margin: "8px",
    padding: "9px 18px",
  },
  l: {
    width: "180px",
    height: "65px",
    fontSize: "22px",
    borderRadius: "6px",
    margin: "9px",
    padding: "10px 20px",
  },
  md: {
    width: "200px",
    height: "70px",
    fontSize: "24px",
    borderRadius: "6px",
    margin: "10px",
    padding: "11px 22px",
  },
  tablet: {
    width: "220px",
    height: "75px",
    fontSize: "26px",
    borderRadius: "7px",
    margin: "11px",
    padding: "12px 24px",
  },
  tabletSm: {
    width: "240px",
    height: "80px",
    fontSize: "28px",
    borderRadius: "7px",
    margin: "12px",
    padding: "13px 26px",
  },
  lg: {
    width: "260px",
    height: "85px",
    fontSize: "30px",
    borderRadius: "8px",
    margin: "13px",
    padding: "14px 28px",
  },
  xl: {
    width: "280px",
    height: "90px",
    fontSize: "32px",
    borderRadius: "8px",
    margin: "14px",
    padding: "15px 30px",
  },
  twoXl: {
    width: "300px",
    height: "95px",
    fontSize: "34px",
    borderRadius: "9px",
    margin: "15px",
    padding: "16px 32px",
  },
  threeXl: {
    width: "320px",
    height: "100px",
    fontSize: "36px",
    borderRadius: "9px",
    margin: "16px",
    padding: "17px 34px",
  },
  fourXl: {
    width: "340px",
    height: "105px",
    fontSize: "38px",
    borderRadius: "10px",
    margin: "17px",
    padding: "18px 36px",
  },
  fiveXl: {
    width: "360px",
    height: "110px",
    fontSize: "40px",
    borderRadius: "10px",
    margin: "18px",
    padding: "19px 38px",
  },
  sixXl: {
    width: "380px",
    height: "115px",
    fontSize: "42px",
    borderRadius: "11px",
    margin: "19px",
    padding: "20px 40px",
  },
};

export const ResponsiveLinkButton: Story = {
  args: {
    text: "Link Button",
    backgroundColor: "#0cefef",
    fontWeight: "700",
    fontFamily: "Helvetica",
    textDecoration: "underline",
    border: "4px solid red",
    color: "#3d9a26",
    hoverBackgroundColor: "#f71515",
    hoverColor: "#2b79d3",
    hoverBorder: "6px solid yellow",
    transition: "0.3s ease-in-out",
    responsive: responsiveSettings,
  },
};
