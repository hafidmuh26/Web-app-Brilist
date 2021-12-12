import { FaUserTie, FaHome } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { RiArchiveDrawerFill } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import { GoGitBranch } from "react-icons/go";
import { MdOutlineCorporateFare } from "react-icons/md";
import { AiOutlinePartition } from "react-icons/ai";
import { RiExchangeLine } from "react-icons/ri";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

export const menu = [
  {
    path: "/home",
    active: "home",
    icon: FaHome,
    label: "Home",
    subMenus: [],
  },
  {
    path: "/managements",
    active: "managements",
    icon: FaUserTie,
    label: "Management",
    subMenus: [],
  },
  {
    path: "/channels",
    active: "channels",
    icon: RiArchiveDrawerFill,
    label: "Channel",
    subMenus: [
      {
        path: "/channels/inBranch",
        active: "inBranch",
        icon: GoGitBranch,
        label: "In-Branch Sales",
      },
      {
        path: "/channels/agency",
        active: "agency",
        icon: HiOutlineOfficeBuilding,
        label: "Agency",
      },
      {
        path: "/channels/corporate",
        active: "corporate",
        icon: MdOutlineCorporateFare,
        label: "Corporate",
      },
      {
        path: "/channels/distribution",
        active: "distribution",
        icon: AiOutlinePartition,
        label: "Distribution",
      },
      {
        path: "/channels/alternate",
        active: "alternate",
        icon: RiExchangeLine,
        label: "Alternate",
      },
    ],
  },
  {
    path: "/divisions",
    active: "divisions",
    icon: BsBank2,
    label: "Division",
    subMenus: [
      {
        path: "/divisions/aktuaris",
        active: "aktuaris",
        icon: GoPrimitiveDot,
        label: "Aktuaris",
      },
      {
        path: "/divisions/asuransi_jiwa_kredit",
        active: "asuransi_jiwa_kredit",
        icon: GoPrimitiveDot,
        label: "Asuransi Jiwa Kredit",
      },
      {
        path: "/divisions/syariah",
        active: "syariah",
        icon: GoPrimitiveDot,
        label: "Syariah",
      },
      {
        path: "/divisions/kepatuhan_legal",
        active: "kepatuhan_legal",
        icon: GoPrimitiveDot,
        label: "Kepatuhan & Legal",
      },
      {
        path: "/divisions/klaim",
        active: "klaim",
        icon: GoPrimitiveDot,
        label: "Klaim",
      },
      {
        path: "/divisions/layanan_pemegang_polis",
        active: "layanan_pemegang_polis",
        icon: GoPrimitiveDot,
        label: "Layanan Pemegang Polis",
      },
      {
        path: "/divisions/management_resiko",
        active: "management_resiko",
        icon: GoPrimitiveDot,
        label: "Management Resiko",
      },
      {
        path: "/divisions/management_produk",
        active: "management_produk",
        icon: GoPrimitiveDot,
        label: "Management Produk",
      },
      {
        path: "/divisions/management_investasi",
        active: "management_investasi",
        icon: GoPrimitiveDot,
        label: "Management Investasi",
      },
      {
        path: "/divisions/management_keuangan",
        active: "management_keuangan",
        icon: GoPrimitiveDot,
        label: "Management Keuangan",
      },
    ],
  },
  {
    path: "/adminitrations",
    active: "adminitrations",
    icon: MdAdminPanelSettings,
    label: "Adminitration",
    subMenus: [],
  },
];
