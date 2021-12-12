import { HomePage } from "../scenes/home";
import { Login } from "../scenes/login";
import { ManagementPage } from "../scenes/management";
import {
  InBranchPage,
  AgencyPage,
  CorporatePage,
  DistributionPage,
  AlternatePage,
} from "../scenes/channel";
import {
  AktuarisPage,
  AsuransiJiwaKreditPage,
  Kepatuhan_LegalPage,
  KlaimPage,
  Layanan_PempolPage,
  Manajement_InvestasiPage,
  Manajement_KeuanganPage,
  Manajement_ProdukPage,
  Manajement_ResikoPage,
  SyariahPage,
} from "../scenes/devisi";
import { AdminPage } from "../scenes/admin";

const routes = [
  {
    path: "/",
    component: Login,
    exact: true,
  },
  {
    path: "/home",
    breadcrumb: "Home",
    component: HomePage,
    exact: true,
  },
  {
    path: "/managements",
    component: ManagementPage,
    exact: true,
  },
  { path: "/channels/inBranch", component: InBranchPage, exact: true },
  { path: "/channels/agency", component: AgencyPage, exact: true },
  { path: "/channels/corporate", component: CorporatePage, exact: true },
  { path: "/channels/distribution", component: DistributionPage, exact: true },
  { path: "/channels/alternate", component: AlternatePage, exact: true },
  { path: "/divisions/aktuaris", component: AktuarisPage, exact: true },
  {
    path: "/divisions/asuransi_jiwa_kredit",
    component: AsuransiJiwaKreditPage,
    exact: true,
  },
  { path: "/divisions/syariah", component: SyariahPage, exact: true },
  {
    path: "/divisions/kepatuhan_legal",
    component: Kepatuhan_LegalPage,
    exact: true,
  },
  { path: "/divisions/klaim", component: KlaimPage, exact: true },
  {
    path: "/divisions/layanan_pemegang_polis",
    component: Layanan_PempolPage,
    exact: true,
  },
  {
    path: "/divisions/management_resiko",
    component: Manajement_ResikoPage,
    exact: true,
  },
  {
    path: "/divisions/management_produk",
    component: Manajement_ProdukPage,
    exact: true,
  },
  {
    path: "/divisions/management_investasi",
    component: Manajement_InvestasiPage,
    exact: true,
  },
  {
    path: "/divisions/management_keuangan",
    component: Manajement_KeuanganPage,
    exact: true,
  },
  { path: "/adminitrations", component: AdminPage, exact: true },
];

export default routes;
