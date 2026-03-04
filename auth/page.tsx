<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In - CashiCoin</title>
    <!-- Google Fonts: Outfit -->
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet">
    <!-- Remixicons for Icons -->
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <!-- SEO tags -->
    <meta name="description" content="Sign in to your account and start earning rewards today.">
    <style>
        /* ===== REDESIGNED LEFT PANEL ===== */
        .left-panel {
            flex: 1.1;
            background: linear-gradient(145deg, #061022 0%, #0a2240 50%, #063318 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 2.5rem 2rem 2rem;
            position: relative;
            overflow: hidden;
            min-height: 100vh;
        }

        /* Glow orbs */
        .lp-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            pointer-events: none;
        }

        .lp-orb-1 {
            width: 350px;
            height: 350px;
            background: rgba(0, 209, 107, 0.18);
            top: -80px;
            left: -80px;
        }

        .lp-orb-2 {
            width: 280px;
            height: 280px;
            background: rgba(79, 70, 229, 0.15);
            bottom: 60px;
            right: -60px;
        }

        /* Tagline strip */
        .lp-tagline {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(0, 209, 107, 0.12);
            border: 1px solid rgba(0, 209, 107, 0.3);
            color: #00D16B;
            font-size: 0.85rem;
            font-weight: 600;
            padding: 0.4rem 1rem;
            border-radius: 100px;
            z-index: 2;
        }

        .lp-dot {
            width: 8px;
            height: 8px;
            background: #00D16B;
            border-radius: 50%;
            animation: pulse 1.8s ease-in-out infinite;
        }

        /* Headline */
        .lp-headline {
            text-align: center;
            z-index: 2;
        }

        .lp-headline h2 {
            font-size: 2.4rem;
            font-weight: 800;
            color: white;
            line-height: 1.15;
            margin-bottom: 0.5rem;
        }

        .lp-headline p {
            color: rgba(255, 255, 255, 0.55);
            font-size: 1rem;
            font-weight: 500;
        }

        .lp-highlight {
            color: #00D16B;
            position: relative;
        }

        /* Prevent white background bleed */
        body {
            background-color: #061022 !important;
        }

        .form-wrapper {
            border: 1px solid rgba(255, 255, 255, 0.15) !important;
        }

        /* Mascot visual area */
        .lp-visual {
            position: relative;
            width: 100%;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2;
        }

        .lp-mascot {
            width: 280px;
            max-width: 80%;
            filter: drop-shadow(0 30px 60px rgba(0, 209, 107, 0.3));
            animation: floating 5s ease-in-out infinite;
        }

        /* Win popup cards */
        .lp-win-card {
            position: absolute;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 14px;
            padding: 0.5rem 0.85rem;
            display: flex;
            align-items: center;
            gap: 0.6rem;
            color: white;
            font-size: 0.82rem;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
            animation: popIn 0.5s ease-out forwards;
            opacity: 0;
        }

        .lp-win-card span {
            display: block;
        }

        .lp-win-name {
            font-weight: 600;
            color: rgba(255, 255, 255, 0.75);
            font-size: 0.75rem;
        }

        .lp-win-amount {
            font-weight: 800;
            color: #00D16B;
            font-size: 0.9rem;
        }

        .lp-win-icon {
            font-size: 1.4rem;
            color: #00D16B;
        }

        .lp-win-1 {
            top: 12%;
            left: 0;
            animation-delay: 1.5s;
        }

        .lp-win-2 {
            bottom: 22%;
            right: 0;
            animation-delay: 2.2s;
        }

        .lp-win-3 {
            top: 55%;
            left: 2%;
            animation-delay: 3s;
        }

        /* Stat strip */
        .lp-stats {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            padding: 1rem 1.5rem;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 18px;
            z-index: 2;
        }

        .lp-stat {
            text-align: center;
        }

        .lp-stat strong {
            display: block;
            color: #00D16B;
            font-size: 1.2rem;
            font-weight: 800;
        }

        .lp-stat span {
            color: rgba(255, 255, 255, 0.5);
            font-size: 0.75rem;
            font-weight: 500;
        }

        .lp-stat-divider {
            width: 1px;
            height: 30px;
            background: rgba(255, 255, 255, 0.15);
        }

        @keyframes popIn {
            from {
                opacity: 0;
                transform: scale(0.8) translateY(10px);
            }

            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

        @keyframes floating {

            0%,
            100% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(-14px);
            }
        }

        @keyframes pulse {

            0%,
            100% {
                transform: scale(1);
                opacity: 1;
            }

            50% {
                transform: scale(1.4);
                opacity: 0.6;
            }
        }

        @media (max-width: 768px) {
            .left-panel {
                display: none;
            }
        }
    </style>
</head>

<body>
    <header class="top-nav">
        <div class="nav-container">
            <a href="landing.html" class="nav-brand">
                CashiCoin<span>&lt;</span>
            </a>

            <!-- Desktop Nav -->
            <div class="nav-desktop">
                <nav class="nav-links">
                    <a href="get-started.html">
                        <i class="ri-money-dollar-circle-fill"></i>
                        <span>Get Started</span>
                    </a>
                    <a href="ways-to-earn.html">
                        <i class="ri-book-open-fill"></i>
                        <span>Guide</span>
                    </a>
                    <a href="support.html">
                        <i class="ri-question-fill"></i>
                        <span>Support</span>
                    </a>
                </nav>

                <div class="nav-actions">
                    <button id="navSignupDesktop" class="nav-btn btn-primary">Sign Up</button>
                    <button id="navLoginDesktop" class="nav-btn btn-outline">Login</button>
                </div>
            </div>

            <!-- Hamburger -->
            <button class="nav-toggle" id="navToggle">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div class="mobile-menu" id="mobileMenu">
            <a href="get-started.html"><i class="ri-money-dollar-circle-fill"></i> Get Started</a>
            <a href="ways-to-earn.html"><i class="ri-book-open-fill"></i> Guide</a>
            <a href="support.html"><i class="ri-question-fill"></i> Support</a>

            <div class="mobile-cta">
                <button id="navSignupMobile" class="btn-primary">Sign Up</button>
                <button id="navLoginMobile" class="btn-outline">Login</button>
            </div>
        </div>

        <div class="nav-overlay" id="navOverlay"></div>
    </header>
    <div class="main-content">
        <div class="left-panel">
            <!-- Background glow orbs -->
            <div class="lp-orb lp-orb-1"></div>
            <div class="lp-orb lp-orb-2"></div>

            <!-- Top tagline -->
            <div class="lp-tagline">
                <span class="lp-dot"></span>
                50,000+ members earning daily
            </div>

            <!-- Main headline -->
            <div class="lp-headline">
                <h2>Turn your spare<br>time into <span class="lp-highlight">real cash</span></h2>
                <p>Games. Surveys. Shopping. It all pays.</p>
            </div>

            <!-- Mascot + floating cards -->
            <div class="lp-visual">
                <img src="assets/mascot.png" alt="CashiCoin Mascot" class="lp-mascot">

                <!-- Floating win popups -->
                <div class="lp-win-card lp-win-1">
                    <div class="lp-win-icon"><i class="ri-money-dollar-circle-fill"></i></div>
                    <div>
                        <span class="lp-win-name">Sarah J.</span>
                        <span class="lp-win-amount">Won $50!</span>
                    </div>
                </div>
                <div class="lp-win-card lp-win-2">
                    <div class="lp-win-icon"><i class="ri-money-dollar-circle-fill"></i></div>
                    <div>
                        <span class="lp-win-name">Mike D.</span>
                        <span class="lp-win-amount">Won $100!</span>
                    </div>
                </div>
                <div class="lp-win-card lp-win-3">
                    <div class="lp-win-icon"><i class="ri-trophy-fill"></i></div>
                    <div>
                        <span class="lp-win-name">Alex R.</span>
                        <span class="lp-win-amount">Won $200!</span>
                    </div>
                </div>
            </div>

            <!-- Bottom stat strip -->
            <div class="lp-stats">
                <div class="lp-stat">
                    <strong>$3.5M+</strong>
                    <span>Paid Out</span>
                </div>
                <div class="lp-stat-divider"></div>
                <div class="lp-stat">
                    <strong>24h</strong>
                    <span>Avg Payout</span>
                </div>
                <div class="lp-stat-divider"></div>
                <div class="lp-stat">
                    <strong>100+</strong>
                    <span>Ways to Earn</span>
                </div>
            </div>
        </div>
        <div class="right-panel">
            <div class="bg-grid-overlay"></div>

            <!-- Background Decorative Assets -->
            <div class="reward-aura"></div>

            <!-- Photographic Winner Feature -->
            <div class="winner-photo-wrapper">
                <img src="assets/trust_section_img.png" alt="Happy Winner" class="winner-photo">
                <div class="winner-label">Top Earner This Week</div>
            </div>
            <div class="winner-ticker">
                <div class="ticker-item">$50 WON</div>
                <div class="ticker-item">$100 WON</div>
                <div class="ticker-item">$25 WON</div>
                <div class="ticker-item">$200 WON</div>
                <div class="ticker-item">$75 WON</div>
            </div>

            <img src="assets/cart.png" alt="" class="bg-asset bg-cart">
            <img src="assets/money.png" alt="" class="bg-asset bg-money">
            <img src="assets/money.png" alt="" class="bg-asset bg-money-2">
            <img src="assets/money.png" alt="" class="bg-asset bg-money-3">
            <img src="assets/cart.png" alt="" class="bg-asset bg-cart-2">

            <div class="form-wrapper">
                <div class="engagement-header">
                    <div class="trust-badge">
                        <i class="ri-shield-check-fill"></i>
                        <span>Join 50,000+ members earning today</span>
                    </div>
                </div>

                <div class="form-brand-large">
                    <span class="brand-text">CashiCoin</span><span class="brand-arrow">&lt;</span>
                </div>

                <div class="benefits-list">
                    <div class="benefit-item">
                        <i class="ri-flashlight-fill"></i>
                        <span>$5.00 Instant Signup Bonus</span>
                    </div>
                    <div class="benefit-item">
                        <i class="ri-timer-flash-line"></i>
                        <span>Average payout in 24 hours</span>
                    </div>
                    <div class="benefit-item">
                        <i class="ri-gift-fill"></i>
                        <span>100+ Daily ways to earn</span>
                    </div>
                </div>

                <div class="social-login">
                    <button class="social-btn google" aria-label="Sign in with Google">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                            alt="Google logo">
                        <span>Google</span>
                    </button>
                    <button class="social-btn paypal" aria-label="Sign in with Paypal">
                        <i class="ri-paypal-fill" style="color: #00457C;"></i>
                        <span>Paypal</span>
                    </button>
                </div>

                <div class="divider">
                    <span>Or</span>
                </div>

                <form id="loginForm" action="#" method="POST" class="login-form">
                    <div class="input-group">
                        <input type="email" id="email" name="email" placeholder="Enter your email" required>
                    </div>

                    <div class="input-group password-group">
                        <input type="password" id="password" name="password" placeholder="Password" required>
                        <button type="button" class="toggle-password" aria-label="Toggle password visibility">
                            <i class="ri-eye-line"></i>
                        </button>
                    </div>

                    <button type="submit" id="submitBtn" class="signin-submit">Log In</button>

                    <div class="form-footer" id="loginOptions">
                        <div class="remember-me">
                            <label class="checkbox-container">
                                <input type="checkbox" id="remember">
                                <span class="checkmark"></span>
                                Stay logged in
                            </label>
                        </div>
                        <a href="#" class="forgot-link">Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="modal-overlay" id="googleModal">
        <div class="account-modal">
            <div class="modal-header">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google">
                <h2>Choose an account</h2>
                <p>to continue to CashiCoin</p>
            </div>
            <div class="account-list">
                <div class="account-option" data-email="xyryll_demo@gmail.com">
                    <div class="avatar">X</div>
                    <div class="account-details">
                        <h4>Xyryll Demo</h4>
                        <p>xyryll_demo@gmail.com</p>
                    </div>
                </div>
                <div class="account-option" data-email="guest_user@gmail.com">
                    <div class="avatar" style="background: #2563eb;">G</div>
                    <div class="account-details">
                        <h4>Guest User</h4>
                        <p>guest_user@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Auth Toggle Logic (Using Top Nav)
        const navLoginDesktop = document.getElementById('navLoginDesktop');
        const navSignupDesktop = document.getElementById('navSignupDesktop');
        const navLoginMobile = document.getElementById('navLoginMobile');
        const navSignupMobile = document.getElementById('navSignupMobile');

        const submitBtn = document.getElementById('submitBtn');
        const loginOptions = document.getElementById('loginOptions');
        const authTitle = document.querySelector('title');
        let isLogin = true;

        const updateUI = () => {
            if (isLogin) {
                if (navLoginDesktop) navLoginDesktop.className = 'nav-btn btn-primary';
                if (navSignupDesktop) navSignupDesktop.className = 'nav-btn btn-white';
                if (navLoginMobile) navLoginMobile.className = 'btn-primary';
                if (navSignupMobile) navSignupMobile.className = 'btn-outline';

                submitBtn.textContent = 'Log In';
                loginOptions.style.display = 'flex';
                authTitle.textContent = 'Sign In - CashiCoin';
            } else {
                if (navSignupDesktop) navSignupDesktop.className = 'nav-btn btn-primary';
                if (navLoginDesktop) navLoginDesktop.className = 'nav-btn btn-white';
                if (navSignupMobile) navSignupMobile.className = 'btn-primary';
                if (navLoginMobile) navLoginMobile.className = 'btn-outline';

                submitBtn.textContent = 'Create Account';
                loginOptions.style.display = 'none';
                authTitle.textContent = 'Sign Up - CashiCoin';
            }
        }

        // Initialize state
        updateUI();

        const setLogin = (val) => {
            if (isLogin !== val) {
                isLogin = val;
                updateUI();
            }
        };

        if (navLoginDesktop) navLoginDesktop.addEventListener('click', () => setLogin(true));
        if (navSignupDesktop) navSignupDesktop.addEventListener('click', () => setLogin(false));
        if (navLoginMobile) navLoginMobile.addEventListener('click', () => { setLogin(true); closeMenu(); });
        if (navSignupMobile) navSignupMobile.addEventListener('click', () => { setLogin(false); closeMenu(); });

        // Mobile Menu Logic
        const navToggle = document.getElementById("navToggle");
        const mobileMenu = document.getElementById("mobileMenu");
        const navOverlay = document.getElementById("navOverlay");
        const mobileBack = document.getElementById("mobileBack");

        function closeMenu() {
            if (navToggle) navToggle.classList.remove("active");
            if (mobileMenu) mobileMenu.classList.remove("active");
            if (navOverlay) navOverlay.classList.remove("active");
        }

        if (navToggle && mobileMenu && navOverlay) {
            navToggle.addEventListener("click", () => {
                navToggle.classList.toggle("active");
                mobileMenu.classList.toggle("active");
                navOverlay.classList.toggle("active");
            });

            navOverlay.addEventListener("click", closeMenu);
            if (mobileBack) mobileBack.addEventListener("click", closeMenu);
        }

        // Mock Google Login with Account Selector
        const googleBtn = document.querySelector('.social-btn.google');
        const googleModal = document.getElementById('googleModal');
        const accountOptions = document.querySelectorAll('.account-option');

        if (googleBtn) {
            googleBtn.addEventListener('click', () => {
                googleModal.style.display = 'flex';
            });
        }

        // Close modal when clicking outside
        googleModal.addEventListener('click', (e) => {
            if (e.target === googleModal) googleModal.style.display = 'none';
        });

        accountOptions.forEach(option => {
            option.addEventListener('click', () => {
                const selectedEmail = option.getAttribute('data-email');
                sessionStorage.setItem('loggedInUser', selectedEmail);

                // Show loading state on option
                option.style.opacity = '0.5';
                option.style.pointerEvents = 'none';

                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 800);
            });
        });

        // Password toggle logic
        const togglePasswordBtn = document.querySelector('.toggle-password');
        const passwordInput = document.querySelector('#password');

        if (togglePasswordBtn && passwordInput) {
            togglePasswordBtn.addEventListener('click', function (e) {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                this.querySelector('i').classList.toggle('ri-eye-line');
                this.querySelector('i').classList.toggle('ri-eye-off-line');
            });
        }

        // Auth Logic using LocalStorage
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', function (e) {
                e.preventDefault();
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;

                // Initialize users array from localStorage (Simulating JSON DB)
                let users = JSON.parse(localStorage.getItem('cashicoin_users')) || [];

                if (isLogin) {
                    // Login Logic
                    const user = users.find(u => u.email === email && u.password === password);
                    if (user) {
                        submitBtn.textContent = 'Logging in...';
                        submitBtn.disabled = true;
                        submitBtn.style.opacity = '0.7';

                        // Store session (Simulating a real session)
                        sessionStorage.setItem('loggedInUser', email);

                        setTimeout(() => {
                            window.location.href = 'dashboard.html';
                        }, 1000);
                    } else {
                        // Refined feedback for invalid login
                        alert('Password is invalid or user does not exist. Please check your credentials.');
                        submitBtn.textContent = 'Log In';
                        submitBtn.disabled = false;
                        submitBtn.style.opacity = '1';
                    }
                } else {
                    // Sign Up Logic
                    if (users.find(u => u.email === email)) {
                        alert('Email already exists. Please log in.');
                        return;
                    }

                    if (password.length < 6) {
                        alert('Password must be at least 6 characters.');
                        return;
                    }

                    // Save new user (Simulating Write to JSON)
                    const newUser = { email, password, registeredAt: new Date().toISOString() };
                    users.push(newUser);
                    localStorage.setItem('cashicoin_users', JSON.stringify(users));

                    submitBtn.textContent = 'Creating Account...';
                    submitBtn.disabled = true;

                    // Auto-login after signup
                    sessionStorage.setItem('loggedInUser', email);

                    setTimeout(() => {
                        window.location.href = 'dashboard.html';
                    }, 1000);
                }
            });
        }
    </script>
</body>

</html>
