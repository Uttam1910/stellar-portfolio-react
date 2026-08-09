import * as React from 'react';

declare module 'react-icons' {
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
  }
  export type IconType = (props: IconBaseProps) => React.JSX.Element;
}

declare module 'react-icons/lib/esm/iconBase' {
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
  }
  export type IconType = (props: IconBaseProps) => React.JSX.Element;
}

declare module 'react-icons/fa' {
  import { IconBaseProps } from 'react-icons';
  export const FaGraduationCap: (props: IconBaseProps) => React.JSX.Element;
  export const FaAward: (props: IconBaseProps) => React.JSX.Element;
  export const FaFilePdf: (props: IconBaseProps) => React.JSX.Element;
  export const FaExternalLinkAlt: (props: IconBaseProps) => React.JSX.Element;
  export const FaBuilding: (props: IconBaseProps) => React.JSX.Element;
  export const FaCode: (props: IconBaseProps) => React.JSX.Element;
  export const FaEnvelope: (props: IconBaseProps) => React.JSX.Element;
  export const FaFileDownload: (props: IconBaseProps) => React.JSX.Element;
  export const FaGithub: (props: IconBaseProps) => React.JSX.Element;
  export const FaLinkedin: (props: IconBaseProps) => React.JSX.Element;
  export const FaArrowRight: (props: IconBaseProps) => React.JSX.Element;
  export const FaCheck: (props: IconBaseProps) => React.JSX.Element;
  export const FaBriefcase: (props: IconBaseProps) => React.JSX.Element;
  export const FaTrophy: (props: IconBaseProps) => React.JSX.Element;
  export const FaCalendarAlt: (props: IconBaseProps) => React.JSX.Element;
  export const FaFileAlt: (props: IconBaseProps) => React.JSX.Element;
  export const FaBars: (props: IconBaseProps) => React.JSX.Element;
  export const FaTimes: (props: IconBaseProps) => React.JSX.Element;
  export const FaSearch: (props: IconBaseProps) => React.JSX.Element;
  export const FaStar: (props: IconBaseProps) => React.JSX.Element;
  export const FaPaperPlane: (props: IconBaseProps) => React.JSX.Element;
  export const FaCheckCircle: (props: IconBaseProps) => React.JSX.Element;
  export const FaClock: (props: IconBaseProps) => React.JSX.Element;
  export const FaArrowUp: (props: IconBaseProps) => React.JSX.Element;
  export const FaServer: (props: IconBaseProps) => React.JSX.Element;
  export const FaDatabase: (props: IconBaseProps) => React.JSX.Element;
  export const FaLaptopCode: (props: IconBaseProps) => React.JSX.Element;
  export const FaCogs: (props: IconBaseProps) => React.JSX.Element;
  export const FaShieldAlt: (props: IconBaseProps) => React.JSX.Element;
  export const FaRocket: (props: IconBaseProps) => React.JSX.Element;
  export const FaMicrochip: (props: IconBaseProps) => React.JSX.Element;
  export const FaLayerGroup: (props: IconBaseProps) => React.JSX.Element;
}
