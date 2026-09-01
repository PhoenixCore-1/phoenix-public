import { useState, useEffect } from "react";
import "./styles/global.css";

const openDemoRequest = (event) => {
  event.preventDefault();
  window.dispatchEvent(new Event("phoenix:open-demo"));
};
const capabilities = [
  {
    title: "CRM", icon: "crm.png",
    text: "Build stronger customer relationships and keep every interaction connected."
  },
  {
    title: "SALES", icon: "sales.png",
    text: "Manage opportunities, quotes, orders and the journey from prospect to customer."
  },
  {
    title: "PROJECTS", icon: "projects.png",
    text: "Coordinate projects, activities, requirements and progress in one connected environment."
  },
  {
    title: "INVENTORY", icon: "inventory.png",
    text: "Know what you have, where it is and what your business needs next."
  },
  {
    title: "PROCUREMENT", icon: "procurement.png",
    text: "Connect purchasing requirements with suppliers, stock and business demand."
  },
  {
    title: "MANUFACTURING", icon: "manufacturing.png",
    text: "Plan, control and track manufacturing from order through completion."
  },
  {
    title: "ACCOUNTS", icon: "accounts.png",
    text: "Bring financial visibility into the wider picture of your business."
  }
];


const capabilityDetails = [
  {
    title: "CRM",
    icon: "crm.png",
    intro:
      "Build stronger customer relationships by keeping customers, interactions and opportunities connected.",
    coverage: [
      "Customer and relationship information",
      "Contacts and business interactions",
      "Opportunities and relationship activity",
      "A connected view of the customer journey"
    ],
    connects: ["Sales", "Projects", "Accounts"],
    flow: "Customer -> Opportunity -> Sales -> Project -> Accounts"
  },
  {
    title: "SALES",
    icon: "sales.png",
    intro:
      "Manage opportunities, quotes, orders and the journey from prospect to customer in one connected environment.",
    coverage: [
      "Sales opportunities",
      "Quotations and orders",
      "Customer journey management",
      "Connected commercial information"
    ],
    connects: ["CRM", "Inventory", "Projects", "Accounts"],
    flow:
      "CRM -> Opportunity -> Quote -> Order -> Inventory / Project -> Accounts"
  },
  {
    title: "PROJECTS",
    icon: "projects.png",
    intro:
      "Coordinate projects, activities, requirements and progress while keeping the wider business connected.",
    coverage: [
      "Project coordination",
      "Activities and requirements",
      "Progress visibility",
      "Connected project information"
    ],
    connects: ["CRM", "Sales", "Inventory", "Procurement", "Manufacturing", "Accounts"],
    flow:
      "Sales / CRM -> Project -> Requirements -> Procurement / Inventory / Manufacturing -> Accounts"
  },
  {
    title: "INVENTORY",
    icon: "inventory.png",
    intro:
      "Know what you have, where it is and what your business needs next.",
    coverage: [
      "Stock visibility",
      "Item and inventory information",
      "Location awareness",
      "Business demand visibility"
    ],
    connects: ["Sales", "Procurement", "Projects", "Manufacturing"],
    flow:
      "Demand -> Inventory -> Procurement / Manufacturing -> Availability"
  },
  {
    title: "PROCUREMENT",
    icon: "procurement.png",
    intro:
      "Connect purchasing requirements with suppliers, stock and business demand.",
    coverage: [
      "Purchasing requirements",
      "Supplier-related information",
      "Incoming stock visibility",
      "Business demand connection"
    ],
    connects: ["Inventory", "Projects", "Manufacturing", "Accounts"],
    flow:
      "Demand -> Requirement -> Supplier -> Purchase -> Incoming Stock"
  },
  {
    title: "MANUFACTURING",
    icon: "manufacturing.png",
    intro:
      "Plan, control and track manufacturing from order through completion.",
    coverage: [
      "Manufacturing orders",
      "Production stages",
      "Progress and completion visibility",
      "Connection to stock and business demand"
    ],
    connects: ["Sales", "Inventory", "Procurement", "Projects"],
    flow:
      "Order / Demand -> Manufacturing -> WIP -> Completion -> Inventory"
  },
  {
    title: "ACCOUNTS",
    icon: "accounts.png",
    intro:
      "Bring financial visibility into the wider picture of your business.",
    coverage: [
      "Financial visibility",
      "Connected business information",
      "Commercial context",
      "A wider view of business performance"
    ],
    connects: ["CRM", "Sales", "Projects", "Procurement", "Manufacturing"],
    flow:
      "Business Activity -> Commercial Information -> Financial Visibility"
  }
];
const reasons = [
  {
    number: "01",
    title: "CONNECTED",
    text: "Your business information works together instead of living in disconnected systems."
  },
  {
    number: "02",
    title: "MODULAR",
    text: "Phoenix grows around your business, with capabilities that can be introduced as needed."
  },
  {
    number: "03",
    title: "CONTROLLED",
    text: "Clear identity, permissions and ownership provide the control a serious business requires."
  },
  {
    number: "04",
    title: "READY TO GROW",
    text: "A platform designed to evolve with the business rather than hold it back."
  }
];

function Logo() {
  return (
    <a className="brand" href="/" aria-label="Phoenix home">
      <img
        src="/icons/Phoenix.png"
        alt="Phoenix"
        onError={(event) => {
          event.currentTarget.style.display = "none";
          event.currentTarget.nextElementSibling.style.display = "block";
        }}
      />

      <span className="brand-fallback">PHOENIX</span>

      <span className="brand-wordmark">
        PHOENIX
      </span>

      <span className="brand-tagline">
        BUILT FOR TODAY. READY FOR TOMORROW.
      </span>
    </a>
  );
}
function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#why-phoenix">Why Phoenix</a>
        </nav>

        <div className="header-actions">
          <button type="button" className="button button-outline" onClick={openDemoRequest}>
            Request a Demo
          </button>
          <a className="button button-solid" href="/login">
            Login
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />

      <div className="container hero-content">
        <div className="hero-copy">
          <div className="eyebrow">
            <span />
            THE CONNECTED BUSINESS PLATFORM
          </div>

          <h1>
            RUN YOUR BUSINESS
            <strong>AS ONE SYSTEM.</strong>
          </h1>

          <p className="hero-description">
            One platform. Connected information. Better decisions.
            Greater control.
          </p>

          <div className="hero-actions">
            <a className="button button-large button-outline-light" href="#capabilities">
              Explore Phoenix
              <span>{"\u2197"}</span>
            </a>

            <button type="button" className="button button-large button-solid" onClick={openDemoRequest}>
              Request a Demo
            </button>
          </div>
        </div>

        <div className="hero-visual" aria-label="Connected Phoenix business platform">
          <div className="orb orb-one" />
          <div className="orb orb-two" />

          <div className="platform-core">
            <img
              className="platform-core-logo"
              src="/icons/Phoenix.png"
              alt="Phoenix"
            />
            <div className="core-title">ONE BUSINESS</div>
            <div className="core-subtitle">ONE CONNECTED PLATFORM</div>
          </div>

          <div className="hero-module-ring">

            <div className="module-node node-crm" aria-label="CRM">
              <img src="/icons/crm.png" alt="" />
            </div>

            <div className="module-node node-sales" aria-label="Sales">
              <img src="/icons/sales.png" alt="" />
            </div>

            <div className="module-node node-projects" aria-label="Projects">
              <img src="/icons/projects.png" alt="" />
            </div>

            <div className="module-node node-inventory" aria-label="Inventory">
              <img src="/icons/inventory.png" alt="" />
            </div>

            <div className="module-node node-procurement" aria-label="Procurement">
              <img src="/icons/procurement.png" alt="" />
            </div>

            <div className="module-node node-manufacturing" aria-label="Manufacturing">
              <img src="/icons/manufacturing.png" alt="" />
            </div>

            <div className="module-node node-accounts" aria-label="Accounts">
              <img src="/icons/accounts.png" alt="" />
            </div>

          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <i />
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="problem section">
      <div className="container problem-layout">
        <div>
          <div className="eyebrow">
            <span />
            WHY PHOENIX
          </div>

          <h2>
            YOUR BUSINESS
            <br />
            <strong>IS CONNECTED.</strong>
          </h2>
        </div>

        <div className="problem-copy">
          <p className="large-copy">
            Your customers, sales, projects, stock, purchasing and
            manufacturing already depend on each other.
          </p>

          <p>
            Phoenix brings those business functions together so information
            can move with the business instead of becoming trapped in
            disconnected systems.
          </p>

          <div className="transition-line">
            <span>FROM DISCONNECTED</span>
            <b>{"\u2192"}</b>
            <span>TO CONNECTED</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const [selectedCapability, setSelectedCapability] = useState(null);

  const closeCapability = () => {
    setSelectedCapability(null);
  };

  return (
    <section className="capabilities section" id="capabilities">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span />
              THE PHOENIX PLATFORM
            </div>

            <h2>
              EVERY PART OF YOUR
              <strong>BUSINESS. CONNECTED.</strong>
            </h2>
          </div>

          <p>
            Phoenix brings the core functions of your business together
            inside one platform.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map((item, index) => (
            <button
              className="capability-card"
              key={item.title}
              type="button"
              onClick={() => setSelectedCapability(
                capabilityDetails.find(
                  (detail) => detail.title === item.title
                )
              )}
              aria-label={`Explore ${item.title}`}
            >
              <span className="card-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className="card-icon"
                aria-hidden="true"
              >
                <img
                  src={`/icons/${item.icon}`}
                  alt=""
                />
              </span>

              <span className="capability-card-title">
                {item.title}
              </span>

              <span className="capability-card-text">
                {item.text}
              </span>

              <span
                className="card-arrow"
                aria-hidden="true"
              >
                {"\u2197"}
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedCapability && (
        <div
          className="capability-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeCapability();
            }
          }}
        >
          <div
            className="capability-modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="capability-modal-title"
          >
            <button
              className="capability-modal-close"
              type="button"
              onClick={closeCapability}
              aria-label="Close capability details"
            >
              {"\u00D7"}
            </button>

            <div className="capability-modal-eyebrow">
              PHOENIX CAPABILITY
            </div>

            <div className="capability-modal-heading">
              <div className="capability-modal-icon">
                <img
                  src={`/icons/${selectedCapability.icon}`}
                  alt=""
                />
              </div>

              <div>
                <h3 id="capability-modal-title">
                  {selectedCapability.title}
                </h3>

                <p>
                  {selectedCapability.intro}
                </p>
              </div>
            </div>

            <div className="capability-modal-content">
              <div>
                <span className="capability-modal-label">
                  PHOENIX COVERS
                </span>

                <ul>
                  {selectedCapability.coverage.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="capability-modal-label">
                  CONNECTS WITH
                </span>

                <div className="capability-connections">
                  {selectedCapability.connects.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="capability-flow">
              <span className="capability-modal-label">
                CONNECTED BUSINESS FLOW
              </span>

              <strong>
                {selectedCapability.flow.split("->").map((part, index, parts) => (<span key={`${part}-${index}`}>{part.trim()}{index < parts.length - 1 && (<span className="capability-flow-arrow">{String.fromCharCode(8594)}</span>)}</span>))}
              </strong>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
function WhyPhoenix() {
  return (
    <section className="why section" id="why-phoenix">
      <div className="container">
        <div className="why-intro">
          <div className="eyebrow">
            <span />
            WHY PHOENIX
          </div>

          <h2>
            BUILT FOR TODAY.
            <strong>READY FOR TOMORROW.</strong>
          </h2>
        </div>

        <div className="reason-grid">
          {reasons.map((reason) => (
            <article className="reason-card" key={reason.number}>
              <span>{reason.number}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCallToAction() {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="cta-panel">
          <div className="cta-glow" />

          <div className="eyebrow">
            <span />
            DISCOVER PHOENIX
          </div>

          <h2>
            READY TO SEE
            <strong>WHAT PHOENIX CAN DO?</strong>
          </h2>

          <p>
            See how a connected business platform can change the way
            your business works.
          </p>

          <div className="cta-actions">
            <button type="button" className="button button-large button-solid" onClick={openDemoRequest}>
              Request a Demo
            </button>

            <a className="button button-large button-outline-light" href="#capabilities">
              Explore Capabilities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Logo />
          <p>Your business. Connected.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>PHOENIX</h4>
            <a href="#home">Home</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#why-phoenix">Why Phoenix</a>
          </div>

          <div>
            <h4>GET STARTED</h4>
            <button type="button" className="footer-demo-link" onClick={openDemoRequest}>Request a Demo</button>
            <a href="/login">Login</a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>Â© Phoenix</span>
        <span>BUILT FOR TODAY. READY FOR TOMORROW.</span>
      </div>
    </footer>
  );
}

function DemoRequestModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const openModal = () => {
      setSubmitted(false);
      setOpen(true);
    };

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("phoenix:open-demo", openModal);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("phoenix:open-demo", openModal);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  if (!open) {
    return null;
  }

  const closeModal = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="demo-modal"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      <div
        className="demo-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
      >
        <button
          type="button"
          className="demo-modal-close"
          aria-label="Close demo request"
          onClick={closeModal}
        >
          X
        </button>

        {!submitted ? (
          <>
            <span className="demo-modal-eyebrow">REQUEST A DEMO</span>

            <h2 id="demo-modal-title">SEE PHOENIX IN ACTION.</h2>

            <p className="demo-modal-intro">
              Tell us a little about your business and what you would like to
              explore. We will use this information to prepare the right
              conversation.
            </p>

            <form className="demo-form" onSubmit={handleSubmit}>
              <div className="demo-form-grid">

                <label>
                  <span>FULL NAME *</span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                  />
                </label>

                <label>
                  <span>COMPANY *</span>
                  <input
                    type="text"
                    name="company"
                    required
                    autoComplete="organization"
                    placeholder="Company name"
                  />
                </label>

                <label>
                  <span>BUSINESS EMAIL *</span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                  />
                </label>

                <label>
                  <span>PHONE</span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+27 ..."
                  />
                </label>

                <label>
                  <span>COUNTRY / REGION</span>
                  <input
                    type="text"
                    name="country"
                    autoComplete="country-name"
                    placeholder="Country or region"
                  />
                </label>

                <label>
                  <span>YOUR ROLE</span>
                  <input
                    type="text"
                    name="role"
                    placeholder="Your role in the business"
                  />
                </label>

                <label>
                  <span>COMPANY SIZE</span>
                  <select name="companySize" defaultValue="">
                    <option value="" disabled>Select</option>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>201-500</option>
                    <option>500+</option>
                  </select>
                </label>

                <label>
                  <span>WHAT WOULD YOU LIKE TO EXPLORE? *</span>
                  <select name="interest" required defaultValue="">
                    <option value="" disabled>Select an area</option>
                    <option>Connected Platform</option>
                    <option>CRM</option>
                    <option>Sales</option>
                    <option>Projects</option>
                    <option>Inventory</option>
                    <option>Procurement</option>
                    <option>Manufacturing</option>
                    <option>Accounts</option>
                  </select>
                </label>

              </div>

              <label className="demo-form-full">
                <span>WHAT WOULD YOU LIKE TO DISCUSS?</span>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your business, current systems or what you would like Phoenix to solve."
                />
              </label>

              <div className="demo-form-footer">

                <label className="demo-contact-method">
                  <span>PREFERRED CONTACT</span>
                  <select name="contactMethod" defaultValue="Email">
                    <option>Email</option>
                    <option>Phone</option>
                    <option>WhatsApp</option>
                  </select>
                </label>

                <button
                  type="submit"
                  className="button button-large button-solid"
                >
                  REQUEST A DEMO
                </button>

              </div>
            </form>
          </>
        ) : (
          <div className="demo-success">
            <span className="demo-modal-eyebrow">REQUEST RECEIVED</span>

            <h2>THANK YOU.</h2>

            <p>
              Your demo request has been captured. We will use the information
              you provided to prepare the conversation.
            </p>

            <button
              type="button"
              className="button button-large button-solid"
              onClick={closeModal}
            >
              CLOSE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loggingIn) {
      return;
    }

    setLoginError("");
    setLoggingIn(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username: username.trim(),
          password,
          remember_me: rememberMe,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setLoginError(
          data.error || "Unable to sign in. Please check your credentials."
        );
        return;
      }

      if (!data.ok) {
        setLoginError("Unable to sign in. Please try again.");
        return;
      }

      window.location.href = "https://app.corephoenix.co.za/";
    } catch (error) {
      setLoginError(
        "Unable to connect to Phoenix Core. Please try again."
      );
    } finally {
      setLoggingIn(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-background" />

      <main className="login-shell">
        <div className="login-brand">
          <a href="/" aria-label="Return to Phoenix">
            <img
              src="/icons/Phoenix.png"
              alt="Phoenix"
              className="login-emblem"
            />
          </a>

          <div className="login-wordmark">PHOENIX</div>

          <div className="login-slogan">
            BUILD FOR TODAY. READY FOR TOMORROW.
          </div>
        </div>

        <section className="login-card" aria-labelledby="login-title">
          <div className="login-card-heading">
            <span className="login-eyebrow">
              WELCOME TO PHOENIX
            </span>

            <h1 id="login-title">
              SIGN IN TO YOUR PLATFORM.
            </h1>

            <p>
              Access your connected business environment.
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <label>
              <span>EMAIL / USERNAME</span>
              <input
                type="text"
                name="username"
                autoComplete="username"
                required
                placeholder="Enter your email or username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>

            <label>
              <span>PASSWORD</span>

              <div className="login-password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />

                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() =>
                    setShowPassword((value) => !value)
                  }
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </label>

            <div className="login-options">
              <label className="login-remember">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) =>
                    setRememberMe(event.target.checked)
                  }
                />
                <span>REMEMBER ME</span>
              </label>

              <a href="#forgot-password">
                Forgot password?
              </a>
            </div>

            {loginError && (
              <div className="login-error" role="alert">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="button button-large button-solid login-submit"
              disabled={loggingIn}
            >
              {loggingIn ? "SIGNING IN..." : "LOGIN"}
            </button>
          </form>

          <div className="login-card-footer">
            <a href="/">← RETURN TO PHOENIX</a>
          </div>
        </section>

        <div className="login-security-note">
          PHOENIX PLATFORM
          <span />
          SECURE BUSINESS ACCESS
        </div>
      </main>
    </div>
  );
}
export default function App() {
  if (window.location.pathname === "/login") {
    return <LoginPage />;
  }
  return (
    <>
      <Header />
      <DemoRequestModal />
      <main>
        <Hero />
        <Problem />
        <Capabilities />
        <WhyPhoenix />
        <FinalCallToAction />
      </main>
      <Footer />
    </>
  );
}





