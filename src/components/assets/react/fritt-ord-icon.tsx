import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFrittOrdLogo = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 475 1004"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
    ref={ref}
  >
    <style>
      {`
        .fritt-ord-logo-text { fill: #231f20}
        @media (prefers-color-scheme: dark) {
          .fritt-ord-logo-text { fill: currentcolor; }
        }
      `}
    </style>
    <path
      d="M2073.21 733.146C1989.835 733.146 1934.511 795.238 1934.511 871.846C1934.511 948.4459999999998 1991.186 1010.546 2073.21 1010.546C2155.227 1010.546 2211.911 948.4460000000001 2211.911 871.846C2211.911 795.238 2155.227 733.146 2073.21 733.146zM2073.21 772.979C2133.1440000000002 772.979 2172.069 817.3329999999999 2172.069 871.846C2172.069 926.358 2133.144 970.704 2073.21 970.704C2013.277 970.704 1974.344 926.358 1974.344 871.846C1974.344 817.3330000000002 2011.9230000000002 772.979 2073.21 772.979zM911.8499999999998 777.34V741.823A2.163 2.163 0 0 0 909.692 739.66H737.05A2.16 2.16 0 0 0 734.892 741.823V1001.7729999999998C734.892 1002.9689999999998 735.858 1003.935 737.05 1003.935H772.5709999999998A2.156 2.156 0 0 0 774.7289999999998 1001.7729999999998V915.2189999999998C774.7289999999998 914.4229999999999 775.3749999999999 913.7729999999998 776.1749999999997 913.7729999999998H880.3379999999996A2.154 2.154 0 0 0 882.4919999999997 911.6189999999998V876.0939999999998A2.157 2.157 0 0 0 880.3379999999996 873.9399999999998H776.1749999999997C775.3749999999999 873.9399999999998 774.7289999999998 873.2939999999999 774.7289999999998 872.4979999999998V780.9359999999998C774.7289999999998 780.1439999999999 775.3749999999999 779.4979999999998 776.1749999999997 779.4979999999998H909.6919999999999A2.164 2.164 0 0 0 911.8499999999997 777.3399999999998zM1266.05 1003.94H1230.538A2.154 2.154 0 0 1 1228.375 1001.7820000000002V741.911C1228.375 740.7199999999998 1229.337 739.757 1230.538 739.757H1266.05C1267.2459999999999 739.757 1268.213 740.7199999999998 1268.213 741.911V1001.782A2.157 2.157 0 0 1 1266.05 1003.9399999999998zM1504.9 739.662H1327.154A2.162 2.162 0 0 0 1324.992 741.821V777.342A2.16 2.16 0 0 0 1327.154 779.5H1394.492C1395.287 779.5 1395.933 780.146 1395.933 780.942V1001.779C1395.933 1002.9749999999998 1396.9 1003.9369999999998 1398.091 1003.9369999999998H1433.6119999999999A2.156 2.156 0 0 0 1435.771 1001.779V780.942C1435.771 780.146 1436.416 779.5 1437.212 779.5H1504.9A2.158 2.158 0 0 0 1507.058 777.342V741.821A2.161 2.161 0 0 0 1504.9 739.662zM1727.53 739.662H1549.784A2.165 2.165 0 0 0 1547.618 741.821V777.342C1547.618 778.533 1548.588 779.5 1549.784 779.5H1617.122C1617.9129999999998 779.5 1618.563 780.146 1618.563 780.942V1001.779C1618.563 1002.9749999999998 1619.53 1003.9369999999998 1620.718 1003.9369999999998H1656.243A2.156 2.156 0 0 0 1658.4009999999996 1001.779V780.942A1.44 1.44 0 0 1 1659.842 779.5H1727.53A2.155 2.155 0 0 0 1729.684 777.342V741.821A2.158 2.158 0 0 0 1727.53 739.662zM2645.46 964.0999999999998H2585.222A1.443 1.443 0 0 1 2583.78 962.6579999999998V781.0249999999999A1.44 1.44 0 0 1 2585.222 779.5879999999999H2645.46C2701.751 779.5879999999999 2737.718 820.9709999999999 2737.718 871.8419999999999S2701.7509999999997 964.0999999999998 2645.46 964.0999999999998zM2645.46 739.7499999999999V739.662H2546.101A2.16 2.16 0 0 0 2543.943 741.825V1001.779C2543.943 1002.971 2544.909 1003.9369999999998 2546.101 1003.9369999999998H2645.46C2723.835 1003.9369999999998 2777.555 944.7959999999998 2777.555 871.8419999999999C2777.555 798.8919999999998 2723.835 739.7499999999999 2645.46 739.7499999999999zM1009.7 779.5H1072.213C1098.113 779.5 1119.604 800.183 1119.859 826.075C1120.1129999999998 852.229 1098.913 873.584 1072.817 873.584H1009.7A1.443 1.443 0 0 1 1008.2540000000001 872.146V780.938C1008.2540000000001 780.142 1008.9040000000001 779.5 1009.7 779.5zM1119.759 1003.933H1161.721C1163.425 1003.933 1164.459 1002.059 1163.55 1000.6210000000002L1104.834 907.3290000000002C1137.15 894.5130000000001 1159.954 862.8670000000002 1159.6960000000001 825.9210000000003C1159.363 778.0500000000003 1119.892 739.6580000000004 1072.0210000000002 739.6580000000004H970.5790000000002A2.162 2.162 0 0 0 968.4170000000001 741.8170000000001V1001.7750000000003C968.4170000000001 1002.9710000000001 969.383 1003.9330000000001 970.5790000000002 1003.9330000000001H1006.0960000000001A2.155 2.155 0 0 0 1008.2540000000001 1001.7750000000003V914.8630000000003C1008.2540000000001 914.0710000000004 1008.9040000000001 913.4250000000002 1009.7 913.4250000000002H1060.404C1061.142 913.4250000000002 1061.834 913.8040000000002 1062.229 914.4380000000002L1117.929 1002.9250000000002A2.16 2.16 0 0 0 1119.759 1003.9330000000001zM2320.45 779.5H2382.9669999999996C2408.8669999999997 779.5 2430.3619999999996 800.183 2430.6079999999997 826.075C2430.8619999999996 852.229 2409.662 873.584 2383.5669999999996 873.584H2320.4499999999994A1.44 1.44 0 0 1 2319.0079999999994 872.146V780.938A1.44 1.44 0 0 1 2320.4499999999994 779.5zM2430.508 1003.933H2472.475C2474.1749999999997 1003.933 2475.208 1002.059 2474.304 1000.6210000000002L2415.583 907.3290000000002C2447.908 894.5130000000001 2470.704 862.8670000000002 2470.446 825.9210000000003C2470.113 778.0500000000003 2430.6459999999997 739.6580000000004 2382.7709999999997 739.6580000000004H2281.3329999999996A2.162 2.162 0 0 0 2279.171 741.8170000000001V1001.7750000000003C2279.171 1002.9710000000001 2280.1369999999997 1003.9330000000001 2281.3329999999996 1003.9330000000001H2316.8499999999995A2.153 2.153 0 0 0 2319.0079999999994 1001.7750000000003V914.8630000000003C2319.0079999999994 914.0710000000004 2319.6539999999995 913.4250000000002 2320.4499999999994 913.4250000000002H2371.1539999999995C2371.8959999999997 913.4250000000002 2372.5879999999997 913.8040000000002 2372.9829999999997 914.4380000000002L2428.6789999999996 1002.9250000000002A2.17 2.17 0 0 0 2430.508 1003.9330000000001z"
      className='fritt-ord-logo-text'
      fillRule="nonzero"
    />
    <path
      d="M283.20399999999995 1003.94S283.0329999999999 104.1400000000001 283.337 104.2650000000001C292.562 108.17300000000012 440.658 173.95600000000013 467.342 370.6560000000002C467.342 370.6560000000002 487.85799999999995 433.6100000000002 459.5209999999999 775.3270000000001L403.471 792.7480000000003C391.742 796.7520000000002 369.383 804.5560000000003 364.5 847.9520000000001L347.775 1003.9400000000003H283.20399999999995zM251.88300000000004 1003.94V0.06999999999999S-20.17099999999993 249.762 2.22900000000004 821.3330000000002L115.99200000000008 852.824C133.11300000000006 857.507 153.8130000000001 865.912 157.31200000000007 903.1870000000001L167.71700000000004 1003.9370000000001H251.88300000000004z"
      fill="#0071a5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFrittOrdLogo);
const Memo = memo(ForwardRef);
export default Memo;
