import { lazy } from 'react'

const routes = [
  // Home
  {
    path: '/',
    Component: lazy(() => import('pages/home')),
    exact: true,
    title: 'Home',
  },

  // Author pages
  {
    path: '/author/profile/:id?',
    Component: lazy(() => import('pages/author/profile')),
    exact: true,
  },
  {
    path: '/author/drafts',
    Component: lazy(() => import('pages/author/drafts')),
    exact: true,
    private: true,
  },

  // Registered Users Page
  {
    path: '/users',
    Component: lazy(() => import('pages/users')),
    exact: true,
  },

  // Article pages
  {
    path: '/article/details/:id',
    Component: lazy(() => import('pages/article/details')),
    exact: true
  },
  {
    path: '/article/edit/:draftId?',
    Component: lazy(() => import('pages/article/edit')),
    exact: true,
    private: true,
  },

  {
    path: '/tags/:tagName',
    Component: lazy(() => import('pages/tag')),
    exact: true,
  },

  // Auth Pages
  {
    path: '/auth/login',
    Component: lazy(() => import('pages/auth/login')),
    exact: true,
  },
  {
    path: '/auth/password/forgot',
    Component: lazy(() => import('pages/auth/password/forgot')),
    exact: true,
  },
  {
    path: '/auth/password/reset/:token',
    Component: lazy(() => import('pages/auth/password/reset')),
    exact: true,
  },
  {
    path: '/auth/register',
    Component: lazy(() => import('pages/auth/register')),
    exact: true,
  },
  {
    path: '/auth/confirm/:token',
    Component: lazy(() => import('pages/auth/confirm')),
    exact: true,
    title: 'Confirm',
  },

  // Eror pages
  {
    path: '/error/404',
    Component: lazy(() => import('pages/error/404')),
    exact: true,
  },
  {
    path: '/error/500',
    Component: lazy(() => import('pages/error/500')),
    exact: true,
  },

  // Services
  {
    path: '/service/terms',
    Component: lazy(() => import('pages/service/terms')),
    exact: true,
  },
  {
    path: '/service/privacy-policy',
    Component: lazy(() => import('pages/service/privacyPolicy')),
    exact: true,
  },
  {
    path: '/service/about',
    Component: lazy(() => import('pages/service/about')),
    exact: true,
  },
  {
    path: '/service/contact',
    Component: lazy(() => import('pages/service/contact')),
    exact: true,
  },

  // Dashboards
  {
    path: '/dashboard/alpha',
    Component: lazy(() => import('pages/@clean-ui-pages/dashboard/alpha')),
    exact: true,
  },
  {
    path: '/dashboard/beta',
    Component: lazy(() => import('pages/@clean-ui-pages/dashboard/beta')),
    exact: true,
  },
  {
    path: '/dashboard/gamma',
    Component: lazy(() => import('pages/@clean-ui-pages/dashboard/gamma')),
    exact: true,
  },
  {
    path: '/dashboard/crypto',
    Component: lazy(() => import('pages/@clean-ui-pages/dashboard/crypto')),
    exact: true,
  },

  // Ecommerce
  {
    path: '/ecommerce/dashboard',
    Component: lazy(() => import('pages/@clean-ui-pages/ecommerce/dashboard')),
    exact: true,
  },
  {
    path: '/ecommerce/orders',
    Component: lazy(() => import('pages/@clean-ui-pages/ecommerce/orders')),
    exact: true,
  },
  {
    path: '/ecommerce/product-catalog',
    Component: lazy(() => import('pages/@clean-ui-pages/ecommerce/product-catalog')),
    exact: true,
  },
  {
    path: '/ecommerce/product-details',
    Component: lazy(() => import('pages/@clean-ui-pages/ecommerce/product-details')),
    exact: true,
  },
  {
    path: '/ecommerce/cart',
    Component: lazy(() => import('pages/@clean-ui-pages/ecommerce/cart')),
    exact: true,
  },

  // Apps
  {
    path: '/apps/messaging',
    Component: lazy(() => import('pages/@clean-ui-pages/apps/messaging')),
    exact: true,
  },
  {
    path: '/apps/calendar',
    Component: lazy(() => import('pages/@clean-ui-pages/apps/calendar')),
    exact: true,
  },
  {
    path: '/apps/mail',
    Component: lazy(() => import('pages/@clean-ui-pages/apps/mail')),
    exact: true,
  },
  {
    path: '/apps/profile',
    Component: lazy(() => import('pages/@clean-ui-pages/apps/profile')),
    exact: true,
  },
  {
    path: '/apps/gallery',
    Component: lazy(() => import('pages/@clean-ui-pages/apps/gallery')),
    exact: true,
  },
  // Extra Apps
  {
    path: '/apps/github-explore',
    Component: lazy(() => import('pages/@clean-ui-pages/apps/github-explore')),
    exact: true,
  },
  {
    path: '/apps/github-discuss',
    Component: lazy(() => import('pages/@clean-ui-pages/apps/github-discuss')),
    exact: true,
  },
  {
    path: '/apps/digitalocean-droplets',
    Component: lazy(() => import('pages/@clean-ui-pages/apps/digitalocean-droplets')),
    exact: true,
  },
  {
    path: '/apps/digitalocean-create',
    Component: lazy(() => import('pages/@clean-ui-pages/apps/digitalocean-create')),
    exact: true,
  },
  {
    path: '/apps/google-analytics',
    Component: lazy(() => import('pages/@clean-ui-pages/apps/google-analytics')),
    exact: true,
  },
  {
    path: '/apps/wordpress-post',
    Component: lazy(() => import('pages/@clean-ui-pages/apps/wordpress-post')),
    exact: true,
  },
  {
    path: '/apps/wordpress-posts',
    Component: lazy(() => import('pages/@clean-ui-pages/apps/wordpress-posts')),
    exact: true,
  },
  {
    path: '/apps/wordpress-add',
    Component: lazy(() => import('pages/@clean-ui-pages/apps/wordpress-add')),
    exact: true,
  },
  {
    path: '/apps/todoist-list',
    Component: lazy(() => import('pages/@clean-ui-pages/apps/todoist-list')),
    exact: true,
  },
  {
    path: '/apps/jira-dashboard',
    Component: lazy(() => import('pages/@clean-ui-pages/apps/jira-dashboard')),
    exact: true,
  },
  {
    path: '/apps/jira-agile-board',
    Component: lazy(() => import('pages/@clean-ui-pages/apps/jira-agile-board')),
    exact: true,
  },
  {
    path: '/apps/helpdesk-dashboard',
    Component: lazy(() => import('pages/@clean-ui-pages/apps/helpdesk-dashboard')),
    exact: true,
  },
  // Widgets
  {
    path: '/widgets/general',
    Component: lazy(() => import('pages/@clean-ui-pages/widgets/general')),
    exact: true,
  },
  {
    path: '/widgets/lists',
    Component: lazy(() => import('pages/@clean-ui-pages/widgets/lists')),
    exact: true,
  },
  {
    path: '/widgets/tables',
    Component: lazy(() => import('pages/@clean-ui-pages/widgets/tables')),
    exact: true,
  },
  {
    path: '/widgets/charts',
    Component: lazy(() => import('pages/@clean-ui-pages/widgets/charts')),
    exact: true,
  },
  // Cards
  {
    path: '/cards/basic-cards',
    Component: lazy(() => import('pages/@clean-ui-pages/cards/basic-cards')),
    exact: true,
  },
  {
    path: '/cards/tabbed-cards',
    Component: lazy(() => import('pages/@clean-ui-pages/cards/tabbed-cards')),
    exact: true,
  },
  // UI Kits
  {
    path: '/ui-kits/bootstrap',
    Component: lazy(() => import('pages/@clean-ui-pages/ui-kits/bootstrap')),
    exact: true,
  },
  {
    path: '/ui-kits/antd',
    Component: lazy(() => import('pages/@clean-ui-pages/ui-kits/antd')),
    exact: true,
  },
  // Tables
  {
    path: '/tables/bootstrap',
    Component: lazy(() => import('pages/@clean-ui-pages/tables/bootstrap')),
    exact: true,
  },
  {
    path: '/tables/antd',
    Component: lazy(() => import('pages/@clean-ui-pages/tables/antd')),
    exact: true,
  },
  // Charts
  {
    path: '/charts/chartistjs',
    Component: lazy(() => import('pages/@clean-ui-pages/charts/chartistjs')),
    exact: true,
  },
  {
    path: '/charts/chartjs',
    Component: lazy(() => import('pages/@clean-ui-pages/charts/chartjs')),
    exact: true,
  },
  {
    path: '/charts/c3',
    Component: lazy(() => import('pages/@clean-ui-pages/charts/c3')),
    exact: true,
  },
  // Icons
  {
    path: '/icons/feather-icons',
    Component: lazy(() => import('pages/@clean-ui-pages/icons/feather-icons')),
    exact: true,
  },
  {
    path: '/icons/fontawesome',
    Component: lazy(() => import('pages/@clean-ui-pages/icons/fontawesome')),
    exact: true,
  },
  {
    path: '/icons/linearicons-free',
    Component: lazy(() => import('pages/@clean-ui-pages/icons/linearicons-free')),
    exact: true,
  },
  {
    path: '/icons/icomoon-free',
    Component: lazy(() => import('pages/@clean-ui-pages/icons/icomoon-free')),
    exact: true,
  },
  // Advanced
  {
    path: '/advanced/form-examples',
    Component: lazy(() => import('pages/@clean-ui-pages/advanced/form-examples')),
    exact: true,
  },
  {
    path: '/advanced/email-templates',
    Component: lazy(() => import('pages/@clean-ui-pages/advanced/email-templates')),
    exact: true,
  },
  {
    path: '/advanced/utilities',
    Component: lazy(() => import('pages/@clean-ui-pages/advanced/utilities')),
    exact: true,
  },
  {
    path: '/advanced/grid',
    Component: lazy(() => import('pages/@clean-ui-pages/advanced/grid')),
    exact: true,
  },
  {
    path: '/advanced/typography',
    Component: lazy(() => import('pages/@clean-ui-pages/advanced/typography')),
    exact: true,
  },
  {
    path: '/advanced/pricing-tables',
    Component: lazy(() => import('pages/@clean-ui-pages/advanced/pricing-tables')),
    exact: true,
  },
  {
    path: '/advanced/invoice',
    Component: lazy(() => import('pages/@clean-ui-pages/advanced/invoice')),
    exact: true,
  },
  {
    path: '/advanced/colors',
    Component: lazy(() => import('pages/@clean-ui-pages/advanced/colors')),
    exact: true,
  },
]

export default routes
