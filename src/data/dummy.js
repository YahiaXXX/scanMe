import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { GrLocation } from 'react-icons/gr';
import {AiOutlineHome} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {AiOutlineInfoCircle} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import {BiHelpCircle} from "react-icons/bi"
import {BiSearchAlt} from "react-icons/bi"
import {FiTarget} from "react-icons/fi"

import { GiLouvrePyramid } from 'react-icons/gi';

export const links = [
    {
      title: 'Main',
      links: [
        {
          name: 'home',
          icon: <AiOutlineHome />,
        },
        {
          name: 'scan',
          icon: <BiSearchAlt/>,
        },
        {
          name: 'All Targets',
          icon: <FiTarget/>,
        },
        {
          name: 'Vulnerabilities',
          icon: <BiSearchAlt/>,
        },
      ],
    },
  
    {
      title: 'Pages',
      links: [
        {
          name: 'Profile',
          icon: <CgProfile/>,
        },
        {
          name: 'About Us',
          icon: <AiOutlineInfoCircle />,
        },
        {
          name: 'Contact',
          icon: <AiOutlineMail />,
        },
        {
          name: 'help',
          icon: <BiHelpCircle />,
        },
        

      ],
    },
]

  export const themeColors = [
    {
      name: 'blue-theme',
      color: '#1A97F5',
    },
    {
      name: 'green-theme',
      color: '#03C9D7',
    },
    {
      name: 'indigo-theme',
      color: '#1E4DB7',
    },
    {
      color: '#FB9678',
      name: 'orange-theme',
    },
  ];
  const gridEmployeeProfile = (props) => (
    <div className="flex items-center gap-2">
      <p>{props.Name}</p>
    </div>
  );
  
  const gridEmployeeCountry = (props) => (
    <div className="flex items-center justify-center gap-2">
      <GrLocation />
      <span>{props.Country}</span>
    </div>
  );
  
    export const risks = [
      {
        "id": 1,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "PHP Detect",
        "level": "info",
        "description": null,
        "reference": null,
        "recommendation": null,
        "tags": "['tech', 'php']"
      },
      {
        "id": 2,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "DOM EventListener - Cross-Site Scripting",
        "level": "info",
        "description": "EventListener contains a cross-site scripting vulnerability via the document object model (DOM). An attacker can execute arbitrary script which can then allow theft of cookie-based authentication credentials and launch of  other attacks.",
        "reference": "['https://portswigger.net/web-security/dom-based/controlling-the-web-message-source']",
        "recommendation": null,
        "tags": "['xss', 'misc']"
      },
      {
        "id": 3,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "Wappalyzer Technology Detection",
        "level": "info",
        "description": null,
        "reference": null,
        "recommendation": null,
        "tags": "['tech']"
      },
      {
        "id": 4,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "Wappalyzer Technology Detection",
        "level": "info",
        "description": null,
        "reference": null,
        "recommendation": null,
        "tags": "['tech']"
      },
      {
        "id": 5,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "Wappalyzer Technology Detection",
        "level": "info",
        "description": null,
        "reference": null,
        "recommendation": null,
        "tags": "['tech']"
      },
      {
        "id": 6,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "Metatag CMS Detection",
        "level": "info",
        "description": "Generic CMS Detection using html meta generator tag",
        "reference": "['https://www.w3schools.com/tags/att_meta_name.asp']",
        "recommendation": null,
        "tags": "['tech', 'cms']"
      },
      {
        "id": 7,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "Deprecated TLS Detection (TLS 1.1 or SSLv3)",
        "level": "info",
        "description": "Both TLS 1.1 and SSLv3 are deprecated in favor of stronger encryption.\n",
        "reference": "['https://ssl-config.mozilla.org/#config=intermediate']",
        "recommendation": null,
        "tags": "['ssl']"
      },
      {
        "id": 8,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "Deprecated TLS Detection (TLS 1.1 or SSLv3)",
        "level": "info",
        "description": "Both TLS 1.1 and SSLv3 are deprecated in favor of stronger encryption.\n",
        "reference": "['https://ssl-config.mozilla.org/#config=intermediate']",
        "recommendation": null,
        "tags": "['ssl']"
      },
      {
        "id": 9,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "Disable Comments – Remove Comments & Stop Spam [Multi-Site Support] Detection",
        "level": "info",
        "description": null,
        "reference": "['https://wordpress.org/plugins/disable-comments/']",
        "recommendation": null,
        "tags": "['tech', 'wordpress', 'wp-plugin', 'top-100', 'top-200']"
      },
      {
        "id": 10,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "WordPress Importer Detection",
        "level": "info",
        "description": null,
        "reference": "['https://wordpress.org/plugins/wordpress-importer/']",
        "recommendation": null,
        "tags": "['tech', 'wordpress', 'wp-plugin', 'top-100', 'top-200']"
      },
      {
        "id": 11,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "WordPress license file disclosure",
        "level": "info",
        "description": null,
        "reference": null,
        "recommendation": null,
        "tags": "['wordpress']"
      },
      {
        "id": 12,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "TLS Version",
        "level": "info",
        "description": null,
        "reference": null,
        "recommendation": null,
        "tags": "['ssl']"
      },
      {
        "id": 13,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "WordPress Detect",
        "level": "info",
        "description": null,
        "reference": null,
        "recommendation": null,
        "tags": "['tech', 'wordpress', 'cms', 'wp']"
      },
      {
        "id": 14,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "HTTP Missing Security Headers",
        "level": "info",
        "description": "This template searches for missing HTTP security headers. The impact of these missing headers can vary.\n",
        "reference": null,
        "recommendation": null,
        "tags": "['misconfig', 'headers', 'generic']"
      },
      {
        "id": 15,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "HTTP Missing Security Headers",
        "level": "info",
        "description": "This template searches for missing HTTP security headers. The impact of these missing headers can vary.\n",
        "reference": null,
        "recommendation": null,
        "tags": "['misconfig', 'headers', 'generic']"
      },
      {
        "id": 16,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "HTTP Missing Security Headers",
        "level": "info",
        "description": "This template searches for missing HTTP security headers. The impact of these missing headers can vary.\n",
        "reference": null,
        "recommendation": null,
        "tags": "['misconfig', 'headers', 'generic']"
      },
      {
        "id": 17,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "HTTP Missing Security Headers",
        "level": "info",
        "description": "This template searches for missing HTTP security headers. The impact of these missing headers can vary.\n",
        "reference": null,
        "recommendation": null,
        "tags": "['misconfig', 'headers', 'generic']"
      },
      {
        "id": 18,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "HTTP Missing Security Headers",
        "level": "info",
        "description": "This template searches for missing HTTP security headers. The impact of these missing headers can vary.\n",
        "reference": null,
        "recommendation": null,
        "tags": "['misconfig', 'headers', 'generic']"
      },
      {
        "id": 19,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "HTTP Missing Security Headers",
        "level": "info",
        "description": "This template searches for missing HTTP security headers. The impact of these missing headers can vary.\n",
        "reference": null,
        "recommendation": null,
        "tags": "['misconfig', 'headers', 'generic']"
      },
      {
        "id": 20,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "HTTP Missing Security Headers",
        "level": "info",
        "description": "This template searches for missing HTTP security headers. The impact of these missing headers can vary.\n",
        "reference": null,
        "recommendation": null,
        "tags": "['misconfig', 'headers', 'generic']"
      },
      {
        "id": 21,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "HTTP Missing Security Headers",
        "level": "info",
        "description": "This template searches for missing HTTP security headers. The impact of these missing headers can vary.\n",
        "reference": null,
        "recommendation": null,
        "tags": "['misconfig', 'headers', 'generic']"
      },
      {
        "id": 22,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "HTTP Missing Security Headers",
        "level": "info",
        "description": "This template searches for missing HTTP security headers. The impact of these missing headers can vary.\n",
        "reference": null,
        "recommendation": null,
        "tags": "['misconfig', 'headers', 'generic']"
      },
      {
        "id": 23,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "HTTP Missing Security Headers",
        "level": "info",
        "description": "This template searches for missing HTTP security headers. The impact of these missing headers can vary.\n",
        "reference": null,
        "recommendation": null,
        "tags": "['misconfig', 'headers', 'generic']"
      },
      {
        "id": 24,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "HTTP Missing Security Headers",
        "level": "info",
        "description": "This template searches for missing HTTP security headers. The impact of these missing headers can vary.\n",
        "reference": null,
        "recommendation": null,
        "tags": "['misconfig', 'headers', 'generic']"
      },
      {
        "id": 25,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "HTTP Missing Security Headers",
        "level": "info",
        "description": "This template searches for missing HTTP security headers. The impact of these missing headers can vary.\n",
        "reference": null,
        "recommendation": null,
        "tags": "['misconfig', 'headers', 'generic']"
      },
      {
        "id": 26,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "HTTP Missing Security Headers",
        "level": "info",
        "description": "This template searches for missing HTTP security headers. The impact of these missing headers can vary.\n",
        "reference": null,
        "recommendation": null,
        "tags": "['misconfig', 'headers', 'generic']"
      },
      {
        "id": 27,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "HTTP Missing Security Headers",
        "level": "info",
        "description": "This template searches for missing HTTP security headers. The impact of these missing headers can vary.\n",
        "reference": null,
        "recommendation": null,
        "tags": "['misconfig', 'headers', 'generic']"
      },
      {
        "id": 28,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "HTTP Missing Security Headers",
        "level": "info",
        "description": "This template searches for missing HTTP security headers. The impact of these missing headers can vary.\n",
        "reference": null,
        "recommendation": null,
        "tags": "['misconfig', 'headers', 'generic']"
      },
      {
        "id": 29,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "HTTP Missing Security Headers",
        "level": "info",
        "description": "This template searches for missing HTTP security headers. The impact of these missing headers can vary.\n",
        "reference": null,
        "recommendation": null,
        "tags": "['misconfig', 'headers', 'generic']"
      },
      {
        "id": 30,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "HTTP Missing Security Headers",
        "level": "info",
        "description": "This template searches for missing HTTP security headers. The impact of these missing headers can vary.\n",
        "reference": null,
        "recommendation": null,
        "tags": "['misconfig', 'headers', 'generic']"
      },
      {
        "id": 31,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "robots.txt endpoint prober",
        "level": "info",
        "description": null,
        "reference": null,
        "recommendation": null,
        "tags": null
      },
      {
        "id": 32,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "Yoast SEO Detection",
        "level": "info",
        "description": null,
        "reference": "['https://wordpress.org/plugins/wordpress-seo/']",
        "recommendation": null,
        "tags": "['tech', 'wordpress', 'wp-plugin', 'top-100', 'top-200']"
      },
      {
        "id": 33,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "WordPress Login Panel",
        "level": "info",
        "description": null,
        "reference": null,
        "recommendation": null,
        "tags": "['panel', 'wordpress']"
      },
      {
        "id": 34,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "WAF Detection",
        "level": "info",
        "description": "A web application firewall was detected.",
        "reference": "['https://github.com/ekultek/whatwaf']",
        "recommendation": null,
        "tags": "['waf', 'tech', 'misc']"
      },
      {
        "id": 35,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "WAF Detection",
        "level": "info",
        "description": "A web application firewall was detected.",
        "reference": "['https://github.com/ekultek/whatwaf']",
        "recommendation": null,
        "tags": "['waf', 'tech', 'misc']"
      },
      {
        "id": 36,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "HTaccess config file",
        "level": "info",
        "description": null,
        "reference": null,
        "recommendation": null,
        "tags": "['misc', 'config']"
      },
      {
        "id": 37,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "WordPress Core < 4.7.1 - Username Enumeration",
        "level": "medium",
        "description": "WordPress Core < 4.7.1 is susceptible to user enumeration because it does not properly restrict listings of post authors via wp-includes/rest-api/endpoints/class-wp-rest-users-controller.php in the REST API, which allows remote attackers to obtain sensitive information via a wp-json/wp/v2/users request.",
        "reference": "['https://www.exploit-db.com/exploits/41497', 'https://nvd.nist.gov/vuln/detail/cve-2017-5487', 'https://www.wordfence.com/blog/2016/12/wordfence-blocks-username-harvesting-via-new-rest-api-wp-4-7/', 'https://wordpress.org/news/2017/01/wordpress-4-7-1-security-and-maintenance-release/']",
        "recommendation": null,
        "tags": "['cve', 'cve2017', 'wordpress', 'wp', 'edb']"
      },
      {
        "id": 38,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "Smart Slider 3 Detection",
        "level": "info",
        "description": null,
        "reference": "['https://wordpress.org/plugins/smart-slider-3/']",
        "recommendation": null,
        "tags": "['tech', 'wordpress', 'wp-plugin', 'top-100', 'top-200']"
      },
      {
        "id": 39,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "Hello Dolly Detection",
        "level": "info",
        "description": null,
        "reference": "['https://wordpress.org/plugins/hello-dolly/']",
        "recommendation": null,
        "tags": "['tech', 'wordpress', 'wp-plugin', 'top-100', 'top-200']"
      },
      {
        "id": 40,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "WordPress Readme File",
        "level": "info",
        "description": null,
        "reference": null,
        "recommendation": null,
        "tags": "['exposure', 'wordpress', 'wp', 'readme', 'files']"
      },
      {
        "id": 41,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "Wordpress XML-RPC List System Methods",
        "level": "info",
        "description": null,
        "reference": null,
        "recommendation": null,
        "tags": "['wordpress']"
      },
      {
        "id": 42,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "Wordpress User Enumeration",
        "level": "info",
        "description": null,
        "reference": null,
        "recommendation": null,
        "tags": "['wordpress']"
      },
      {
        "id": 43,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "Akismet Spam Protection Detection",
        "level": "info",
        "description": null,
        "reference": "['https://wordpress.org/plugins/akismet/']",
        "recommendation": null,
        "tags": "['tech', 'wordpress', 'wp-plugin', 'top-100', 'top-200']"
      },
      {
        "id": 44,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "SSL DNS Names",
        "level": "info",
        "description": null,
        "reference": null,
        "recommendation": null,
        "tags": "['ssl']"
      },
      {
        "id": 45,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "Detect SSL Certificate Issuer",
        "level": "info",
        "description": null,
        "reference": null,
        "recommendation": null,
        "tags": "['ssl']"
      },
      {
        "id": 46,
        "url": {
          "id": 215,
          "domain": {
            "id": 6,
            "url": "esi.dz",
            "created_at": "2023-01-12T09:59:51.519407Z",
            "get_all_subdomains": false
          },
          "url": "https://lmcs.esi.dz:443",
          "port": "443",
          "scheme": "https",
          "webserver": "cloudflare",
          "host": "172.67.219.84",
          "tech": "['Cloudflare', 'HTTP/3', 'MySQL', 'PHP:7.4.27', 'WordPress:6.0.1', 'YouTube', 'wpBakery']",
          "time": "838.526486ms",
          "json": null,
          "scanned_all": false
        },
        "name": "DNS WAF Detection",
        "level": "info",
        "description": "A DNS WAF was detected.",
        "reference": null,
        "recommendation": null,
        "tags": "['tech', 'waf', 'dns']"
      }
    ]