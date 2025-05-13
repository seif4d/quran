        // --- START Global Variables and State ---
        const fetchedSurahsCache = {};
        let currentVerseFontSize = 1.8; // Default em value from CSS :root, will be updated
        const FONT_SIZE_STEP = 0.1; // How much to increase/decrease font size by
        const MIN_FONT_SIZE = 1.0; // Minimum em
        const MAX_FONT_SIZE = 3.0; // Maximum em

        // YOU MUST POPULATE THIS COMPLETELY
const allSurahsMeta = [
    { index: "1", name: "الفاتحة", englishName: "Al-Fatihah", verses: 7, revelationType: "Meccan" },
    { index: "2", name: "البقرة", englishName: "Al-Baqarah", verses: 286, revelationType: "Medinan" },
    { index: "3", name: "آل عمران", englishName: "Ali 'Imran", verses: 200, revelationType: "Medinan" },
    { index: "4", name: "النساء", englishName: "An-Nisa", verses: 176, revelationType: "Medinan" },
    { index: "5", name: "المائدة", englishName: "Al-Ma'idah", verses: 120, revelationType: "Medinan" },
    { index: "6", name: "الأنعام", englishName: "Al-An'am", verses: 165, revelationType: "Meccan" },
    { index: "7", name: "الأعراف", englishName: "Al-A'raf", verses: 206, revelationType: "Meccan" },
    { index: "8", name: "الأنفال", englishName: "Al-Anfal", verses: 75, revelationType: "Medinan" },
    { index: "9", name: "التوبة", englishName: "At-Tawbah", verses: 129, revelationType: "Medinan" },
    { index: "10", name: "يونس", englishName: "Yunus", verses: 109, revelationType: "Meccan" },
    { index: "11", name: "هود", englishName: "Hud", verses: 123, revelationType: "Meccan" },
    { index: "12", name: "يوسف", englishName: "Yusuf", verses: 111, revelationType: "Meccan" },
    { index: "13", name: "الرعد", englishName: "Ar-Ra'd", verses: 43, revelationType: "Medinan" },
    { index: "14", name: "إبراهيم", englishName: "Ibrahim", verses: 52, revelationType: "Meccan" },
    { index: "15", name: "الحجر", englishName: "Al-Hijr", verses: 99, revelationType: "Meccan" },
    { index: "16", name: "النحل", englishName: "An-Nahl", verses: 128, revelationType: "Meccan" },
    { index: "17", name: "الإسراء", englishName: "Al-Isra", verses: 111, revelationType: "Meccan" },
    { index: "18", name: "الكهف", englishName: "Al-Kahf", verses: 110, revelationType: "Meccan" },
    { index: "19", name: "مريم", englishName: "Maryam", verses: 98, revelationType: "Meccan" },
    { index: "20", name: "طه", englishName: "Taha", verses: 135, revelationType: "Meccan" },
    { index: "21", name: "الأنبياء", englishName: "Al-Anbya", verses: 112, revelationType: "Meccan" },
    { index: "22", name: "الحج", englishName: "Al-Hajj", verses: 78, revelationType: "Medinan" },
    { index: "23", name: "المؤمنون", englishName: "Al-Mu'minun", verses: 118, revelationType: "Meccan" },
    { index: "24", name: "النور", englishName: "An-Nur", verses: 64, revelationType: "Medinan" },
    { index: "25", name: "الفرقان", englishName: "Al-Furqan", verses: 77, revelationType: "Meccan" },
    { index: "26", name: "الشعراء", englishName: "Ash-Shu'ara", verses: 227, revelationType: "Meccan" },
    { index: "27", name: "النمل", englishName: "An-Naml", verses: 93, revelationType: "Meccan" },
    { index: "28", name: "القصص", englishName: "Al-Qasas", verses: 88, revelationType: "Meccan" },
    { index: "29", name: "العنكبوت", englishName: "Al-'Ankabut", verses: 69, revelationType: "Meccan" },
    { index: "30", name: "الروم", englishName: "Ar-Rum", verses: 60, revelationType: "Meccan" },
    { index: "31", name: "لقمان", englishName: "Luqman", verses: 34, revelationType: "Meccan" },
    { index: "32", name: "السجدة", englishName: "As-Sajdah", verses: 30, revelationType: "Meccan" },
    { index: "33", name: "الأحزاب", englishName: "Al-Ahzab", verses: 73, revelationType: "Medinan" },
    { index: "34", name: "سبأ", englishName: "Saba", verses: 54, revelationType: "Meccan" },
    { index: "35", name: "فاطر", englishName: "Fatir", verses: 45, revelationType: "Meccan" },
    { index: "36", name: "يس", englishName: "Ya-Sin", verses: 83, revelationType: "Meccan" },
    { index: "37", name: "الصافات", englishName: "As-Saffat", verses: 182, revelationType: "Meccan" },
    { index: "38", name: "ص", englishName: "Sad", verses: 88, revelationType: "Meccan" },
    { index: "39", name: "الزمر", englishName: "Az-Zumar", verses: 75, revelationType: "Meccan" },
    { index: "40", name: "غافر", englishName: "Ghafir", verses: 85, revelationType: "Meccan" },
    { index: "41", name: "فصلت", englishName: "Fussilat", verses: 54, revelationType: "Meccan" },
    { index: "42", name: "الشورى", englishName: "Ash-Shuraa", verses: 53, revelationType: "Meccan" },
    { index: "43", name: "الزخرف", englishName: "Az-Zukhruf", verses: 89, revelationType: "Meccan" },
    { index: "44", name: "الدخان", englishName: "Ad-Dukhan", verses: 59, revelationType: "Meccan" },
    { index: "45", name: "الجاثية", englishName: "Al-Jathiyah", verses: 37, revelationType: "Meccan" },
    { index: "46", name: "الأحقاف", englishName: "Al-Ahqaf", verses: 35, revelationType: "Meccan" },
    { index: "47", name: "محمد", englishName: "Muhammad", verses: 38, revelationType: "Medinan" },
    { index: "48", name: "الفتح", englishName: "Al-Fath", verses: 29, revelationType: "Medinan" },
    { index: "49", name: "الحجرات", englishName: "Al-Hujurat", verses: 18, revelationType: "Medinan" },
    { index: "50", name: "ق", englishName: "Qaf", verses: 45, revelationType: "Meccan" },
    { index: "51", name: "الذاريات", englishName: "Adh-Dhariyat", verses: 60, revelationType: "Meccan" },
    { index: "52", name: "الطور", englishName: "At-Tur", verses: 49, revelationType: "Meccan" },
    { index: "53", name: "النجم", englishName: "An-Najm", verses: 62, revelationType: "Meccan" },
    { index: "54", name: "القمر", englishName: "Al-Qamar", verses: 55, revelationType: "Meccan" },
    { index: "55", name: "الرحمن", englishName: "Ar-Rahman", verses: 78, revelationType: "Medinan" },
    { index: "56", name: "الواقعة", englishName: "Al-Waqi'ah", verses: 96, revelationType: "Meccan" },
    { index: "57", name: "الحديد", englishName: "Al-Hadid", verses: 29, revelationType: "Medinan" },
    { index: "58", name: "المجادلة", englishName: "Al-Mujadila", verses: 22, revelationType: "Medinan" },
    { index: "59", name: "الحشر", englishName: "Al-Hashr", verses: 24, revelationType: "Medinan" },
    { index: "60", name: "الممتحنة", englishName: "Al-Mumtahanah", verses: 13, revelationType: "Medinan" },
    { index: "61", name: "الصف", englishName: "As-Saf", verses: 14, revelationType: "Medinan" },
    { index: "62", name: "الجمعة", englishName: "Al-Jumu'ah", verses: 11, revelationType: "Medinan" },
    { index: "63", name: "المنافقون", englishName: "Al-Munafiqun", verses: 11, revelationType: "Medinan" },
    { index: "64", name: "التغابن", englishName: "At-Taghabun", verses: 18, revelationType: "Medinan" },
    { index: "65", name: "الطلاق", englishName: "At-Talaq", verses: 12, revelationType: "Medinan" },
    { index: "66", name: "التحريم", englishName: "At-Tahrim", verses: 12, revelationType: "Medinan" },
    { index: "67", name: "الملك", englishName: "Al-Mulk", verses: 30, revelationType: "Meccan" },
    { index: "68", name: "القلم", englishName: "Al-Qalam", verses: 52, revelationType: "Meccan" },
    { index: "69", name: "الحاقة", englishName: "Al-Haqqah", verses: 52, revelationType: "Meccan" },
    { index: "70", name: "المعارج", englishName: "Al-Ma'arij", verses: 44, revelationType: "Meccan" },
    { index: "71", name: "نوح", englishName: "Nuh", verses: 28, revelationType: "Meccan" },
    { index: "72", name: "الجن", englishName: "Al-Jinn", verses: 28, revelationType: "Meccan" },
    { index: "73", name: "المزمل", englishName: "Al-Muzzammil", verses: 20, revelationType: "Meccan" },
    { index: "74", name: "المدثر", englishName: "Al-Muddaththir", verses: 56, revelationType: "Meccan" },
    { index: "75", name: "القيامة", englishName: "Al-Qiyamah", verses: 40, revelationType: "Meccan" },
    { index: "76", name: "الإنسان", englishName: "Al-Insan", verses: 31, revelationType: "Medinan" },
    { index: "77", name: "المرسلات", englishName: "Al-Mursalat", verses: 50, revelationType: "Meccan" },
    { index: "78", name: "النبأ", englishName: "An-Naba", verses: 40, revelationType: "Meccan" },
    { index: "79", name: "النازعات", englishName: "An-Nazi'at", verses: 46, revelationType: "Meccan" },
    { index: "80", name: "عبس", englishName: "'Abasa", verses: 42, revelationType: "Meccan" },
    { index: "81", name: "التكوير", englishName: "At-Takwir", verses: 29, revelationType: "Meccan" },
    { index: "82", name: "الانفطار", englishName: "Al-Infitar", verses: 19, revelationType: "Meccan" },
    { index: "83", name: "المطففين", englishName: "Al-Mutaffifin", verses: 36, revelationType: "Meccan" },
    { index: "84", name: "الانشقاق", englishName: "Al-Inshiqaq", verses: 25, revelationType: "Meccan" },
    { index: "85", name: "البروج", englishName: "Al-Buruj", verses: 22, revelationType: "Meccan" },
    { index: "86", name: "الطارق", englishName: "At-Tariq", verses: 17, revelationType: "Meccan" },
    { index: "87", name: "الأعلى", englishName: "Al-A'la", verses: 19, revelationType: "Meccan" },
    { index: "88", name: "الغاشية", englishName: "Al-Ghashiyah", verses: 26, revelationType: "Meccan" },
    { index: "89", name: "الفجر", englishName: "Al-Fajr", verses: 30, revelationType: "Meccan" },
    { index: "90", name: "البلد", englishName: "Al-Balad", verses: 20, revelationType: "Meccan" },
    { index: "91", name: "الشمس", englishName: "Ash-Shams", verses: 15, revelationType: "Meccan" },
    { index: "92", name: "الليل", englishName: "Al-Layl", verses: 21, revelationType: "Meccan" },
    { index: "93", name: "الضحى", englishName: "Ad-Duhaa", verses: 11, revelationType: "Meccan" },
    { index: "94", name: "الشرح", englishName: "Ash-Sharh", verses: 8, revelationType: "Meccan" },
    { index: "95", name: "التين", englishName: "At-Tin", verses: 8, revelationType: "Meccan" },
    { index: "96", name: "العلق", englishName: "Al-'Alaq", verses: 19, revelationType: "Meccan" },
    { index: "97", name: "القدر", englishName: "Al-Qadr", verses: 5, revelationType: "Meccan" },
    { index: "98", name: "البينة", englishName: "Al-Bayyinah", verses: 8, revelationType: "Medinan" },
    { index: "99", name: "الزلزلة", englishName: "Az-Zalzalah", verses: 8, revelationType: "Medinan" },
    { index: "100", name: "العاديات", englishName: "Al-'Adiyat", verses: 11, revelationType: "Meccan" },
    { index: "101", name: "القارعة", englishName: "Al-Qari'ah", verses: 11, revelationType: "Meccan" },
    { index: "102", name: "التكاثر", englishName: "At-Takathur", verses: 8, revelationType: "Meccan" },
    { index: "103", name: "العصر", englishName: "Al-'Asr", verses: 3, revelationType: "Meccan" },
    { index: "104", name: "الهمزة", englishName: "Al-Humazah", verses: 9, revelationType: "Meccan" },
    { index: "105", name: "الفيل", englishName: "Al-Fil", verses: 5, revelationType: "Meccan" },
    { index: "106", name: "قريش", englishName: "Quraysh", verses: 4, revelationType: "Meccan" },
    { index: "107", name: "الماعون", englishName: "Al-Ma'un", verses: 7, revelationType: "Meccan" },
    { index: "108", name: "الكوثر", englishName: "Al-Kawthar", verses: 3, revelationType: "Meccan" },
    { index: "109", name: "الكافرون", englishName: "Al-Kafirun", verses: 6, revelationType: "Meccan" },
    { index: "110", name: "النصر", englishName: "An-Nasr", verses: 3, revelationType: "Medinan" },
    { index: "111", name: "المسد", englishName: "Al-Masad", verses: 5, revelationType: "Meccan" },
    { index: "112", name: "الإخلاص", englishName: "Al-Ikhlas", verses: 4, revelationType: "Meccan" },
    { index: "113", name: "الفلق", englishName: "Al-Falaq", verses: 5, revelationType: "Meccan" },
    { index: "114", name: "الناس", englishName: "An-Nas", verses: 6, revelationType: "Meccan" }
];
        // --- END Global Variables and State ---

        document.addEventListener('DOMContentLoaded', () => {
            // --- START Element Selectors ---
            const menuToggleBtn = document.getElementById('menu-toggle-btn');
            const sidebar = document.getElementById('sidebar');
            const mainContentArea = document.getElementById('main-content-area');
            const surahListContainer = document.getElementById('surah-list-container');
            const loadingIndicator = document.getElementById('loading-indicator');
            const noResultsMessage = document.getElementById('no-results-message');
            const surahListSection = document.getElementById('surah-list-section');
            const surahDisplaySection = document.getElementById('surah-display-section');
            const surahTitleDisplay = document.getElementById('surah-title-display');
            const bismillahDisplay = document.getElementById('bismillah-display');
            const verseContainer = document.getElementById('verse-container');
            const backToSurahListBtn = document.getElementById('back-to-surah-list');
            const starContainer = document.getElementById('star-container');
            const searchSurahInput = document.getElementById('search-surah-input');
            const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
            const increaseFontSizeBtn = document.getElementById('increase-font-size');
            const decreaseFontSizeBtn = document.getElementById('decrease-font-size');
            // --- END Element Selectors ---


            // --- START Initializations ---
            createStars(100);
            adjustLayoutForSidebar();
            loadSurahList(); // Load initial list
            setupEventListeners();
            updateVerseFontSize(); // Initialize font size from CSS variable or localStorage
            // --- END Initializations ---


            // --- START Event Listeners Setup ---
            function setupEventListeners() {
                menuToggleBtn.addEventListener('click', toggleSidebar);
                mainContentArea.addEventListener('click', closeSidebarOnClickOutside);
                window.addEventListener('resize', adjustLayoutForSidebar);
                searchSurahInput.addEventListener('input', handleSearch);
                backToSurahListBtn.addEventListener('click', () => {
                    // Add a little transition for sections
                    mainContentArea.classList.add('hidden-for-transition');
                    setTimeout(() => {
                        showSection(surahListSection);
                        mainContentArea.classList.remove('hidden-for-transition');
                        searchSurahInput.value = ""; // Clear search
                        filterSurahList(""); // Show all surahs
                        setActiveNavLink(document.getElementById('nav-surahs'));
                    }, 200); // Match opacity transition time
                });
                
                scrollToTopBtn.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
                window.addEventListener('scroll', toggleScrollToTopButton);

                increaseFontSizeBtn.addEventListener('click', () => changeVerseFontSize(FONT_SIZE_STEP));
                decreaseFontSizeBtn.addEventListener('click', () => changeVerseFontSize(-FONT_SIZE_STEP));

                document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
                    link.addEventListener('click', handleNavLinkClick);
                });
            }
            // --- END Event Listeners Setup ---

            // --- START UI and Layout Functions ---
            function createStars(numberOfStars) {
                for (let i = 0; i < numberOfStars; i++) {
                    const star = document.createElement('div');
                    star.classList.add('star');
                    const size = Math.random() * 3 + 1; 
                    star.style.width = `${size}px`;
                    star.style.height = `${size}px`;
                    star.style.top = `${Math.random() * 100}%`;
                    star.style.left = `${Math.random() * 100}%`;
                    star.style.animationDelay = `${Math.random() * 5}s`;
                    star.style.animationDuration = `${Math.random() * 3 + 3}s`;
                    starContainer.appendChild(star);
                }
            }

            function toggleSidebar() {
                sidebar.classList.toggle('open');
                menuToggleBtn.setAttribute('aria-expanded', sidebar.classList.contains('open'));
                if (window.innerWidth <= 768) {
                    mainContentArea.style.marginRight = '0'; 
                }
            }

            function closeSidebarOnClickOutside() {
                if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                    menuToggleBtn.setAttribute('aria-expanded', 'false');
                }
            }
            
            function adjustLayoutForSidebar() {
                if (window.innerWidth > 768) {
                    mainContentArea.style.marginRight = `${sidebar.offsetWidth}px`;
                    mainContentArea.style.marginLeft = '0'; 
                    sidebar.classList.remove('open'); 
                    menuToggleBtn.style.display = 'none';
                } else {
                    mainContentArea.style.marginRight = '0';
                    mainContentArea.style.marginLeft = '0';
                    menuToggleBtn.style.display = 'block'; 
                }
            }

            function toggleScrollToTopButton() {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    scrollToTopBtn.style.display = "block";
                    scrollToTopBtn.style.opacity = "1";
                } else {
                    scrollToTopBtn.style.opacity = "0";
                    // Keep it in display:block but transparent to allow fade out, then hide fully
                    setTimeout(() => { 
                        if (!(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)) {
                           scrollToTopBtn.style.display = "none";
                        }
                    }, 300); // Match transition duration
                }
            }

            function changeVerseFontSize(delta) {
                let newSize = currentVerseFontSize + delta;
                newSize = Math.max(MIN_FONT_SIZE, Math.min(MAX_FONT_SIZE, newSize)); // Clamp
                currentVerseFontSize = parseFloat(newSize.toFixed(2)); // Keep 2 decimal places
                
                document.documentElement.style.setProperty('--verse-font-size', `${currentVerseFontSize}em`);
                // Potentially adjust line height based on font size too
                document.documentElement.style.setProperty('--verse-line-height', `${currentVerseFontSize * 1.4}em`);
                
                localStorage.setItem('quranVerseFontSize', currentVerseFontSize);
            }
            
            function updateVerseFontSize() {
                const storedFontSize = localStorage.getItem('quranVerseFontSize');
                if (storedFontSize) {
                    currentVerseFontSize = parseFloat(storedFontSize);
                } else {
                    // Get from CSS custom property if not in local storage
                    const rootStyle = getComputedStyle(document.documentElement);
                    const cssVarSize = rootStyle.getPropertyValue('--verse-font-size').trim();
                    if (cssVarSize.endsWith('em')) {
                         currentVerseFontSize = parseFloat(cssVarSize.replace('em', ''));
                    } else {
                        currentVerseFontSize = 1.8; // Fallback if CSS var is weird
                    }
                }
                changeVerseFontSize(0); // Apply the loaded/default font size
            }


            function showLoading(isLoading) {
                loadingIndicator.style.display = isLoading ? 'block' : 'none';
                surahListContainer.style.display = isLoading ? 'none' : 'grid'; 
            }

            function showSection(sectionToShow) {
                surahListSection.style.display = 'none';
                surahDisplaySection.style.display = 'none';
                const placeholder = document.getElementById('placeholder-section');
                if(placeholder) placeholder.style.display = 'none';

                sectionToShow.style.display = 'block';
                 // If surah list section is shown, ensure surah list container itself is visible (not hidden by loading)
                if (sectionToShow === surahListSection) {
                    surahListContainer.style.display = 'grid';
                    loadingIndicator.style.display = 'none';
                    noResultsMessage.style.display = 'none';
                }
                
                // Apply fade in animation when showing Surah Display section
                if(sectionToShow === surahDisplaySection) {
                    sectionToShow.style.animation = 'fadeIn 0.4s ease-out';
                } else {
                    sectionToShow.style.animation = ''; // Clear animation for other sections
                }
            }

            function setActiveNavLink(activeLinkElement) {
                document.querySelectorAll('.sidebar nav ul li a').forEach(l => l.classList.remove('active'));
                if (activeLinkElement) {
                    activeLinkElement.classList.add('active');
                }
            }
            // --- END UI and Layout Functions ---


            // --- START Data Handling and Display Functions ---
            function loadSurahList() {
                surahListContainer.innerHTML = ''; 
                allSurahsMeta.forEach(surahMeta => {
                    const card = createSurahCard(surahMeta);
                    surahListContainer.appendChild(card);
                });
                setActiveNavLink(document.getElementById('nav-surahs'));
                showSection(surahListSection);
            }

            function createSurahCard(surahMeta) {
                const card = document.createElement('div');
                card.classList.add('surah-card');
                card.dataset.surahIndex = surahMeta.index;
                card.dataset.surahNameArabic = surahMeta.name;
                card.dataset.surahNameSimple = surahMeta.name_simple; // For search
                card.dataset.surahNameEnglish = surahMeta.englishName.toLowerCase(); // For search
                
                const nameArabic = document.createElement('h3');
                nameArabic.textContent = `${arabicToIndianNumerals(surahMeta.index)}. سورة ${surahMeta.name}`;
                
                const info = document.createElement('p');
                info.textContent = `${surahMeta.englishName} - ${arabicToIndianNumerals(surahMeta.verses.toString())} آيات (${surahMeta.revelationType === 'Meccan' ? 'مكية' : 'مدنية'})`;
                
                card.appendChild(nameArabic);
                card.appendChild(info);
                
                card.addEventListener('click', () => {
                     mainContentArea.classList.add('hidden-for-transition');
                     setTimeout(() => {
                        fetchAndDisplaySurah(surahMeta.index);
                        mainContentArea.classList.remove('hidden-for-transition');
                     }, 100); // Shorter delay for fetch start
                });
                return card;
            }


            async function fetchAndDisplaySurah(surahNumericIndex) {
                const filename = `surah/surah_${surahNumericIndex}.json`;
                showLoading(true); // Show loading on surah list section for now
                showSection(surahListSection); // Keep list section technically visible but content hidden by loader

                if (fetchedSurahsCache[surahNumericIndex]) {
                    renderSurah(fetchedSurahsCache[surahNumericIndex], surahNumericIndex);
                    showLoading(false);
                    return;
                }

                try {
                    const response = await fetch(filename);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status} while fetching ${filename}`);
                    }
                    const surahData = await response.json();
                    fetchedSurahsCache[surahNumericIndex] = surahData; 
                    renderSurah(surahData, surahNumericIndex);
                } catch (error) {
                    console.error("Error fetching or parsing Surah data:", error);
                    alert(`حدث خطأ أثناء تحميل السورة. يرجى التأكد من وجود الملف ${filename} وأن تنسيقه صحيح.`);
                    showSection(surahListSection); // Go back to list
                    filterSurahList(searchSurahInput.value); // Re-apply current search
                } finally {
                    showLoading(false);
                }
            }
            
            function renderSurah(surahData, surahNumericIndex) {
                const surahMeta = allSurahsMeta.find(s => s.index === surahNumericIndex.toString());
                surahTitleDisplay.textContent = surahMeta ? `سورة ${surahMeta.name}` : (surahData.name || `سورة رقم ${surahNumericIndex}`);
                verseContainer.innerHTML = ''; 
                bismillahDisplay.innerHTML = '';

                let bismillahText = "";
                const actualSurahIndexInJson = surahData.index; 

                if (actualSurahIndexInJson !== "009") { 
                    if (surahData.verse.hasOwnProperty('verse_0')) {
                        bismillahText = surahData.verse.verse_0;
                    } else if (actualSurahIndexInJson === "001" && surahData.verse.hasOwnProperty('verse_1')) {
                        bismillahText = surahData.verse.verse_1;
                    } else {
                         bismillahText = "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ";
                    }
                }
                if (bismillahText) bismillahDisplay.textContent = bismillahText;

                const verseKeys = Object.keys(surahData.verse).sort((a, b) => parseInt(a.split('_')[1]) - parseInt(b.split('_')[1]));
                verseKeys.forEach(verseKey => {
                    const verseNumFromKey = parseInt(verseKey.split('_')[1]);
                    if (verseKey === 'verse_0' && surahData.verse.hasOwnProperty('verse_0')) return; 
                     
                    const verseDiv = document.createElement('div');
                    verseDiv.classList.add('verse');
                    const verseTextSpan = document.createElement('span');
                    verseTextSpan.classList.add('verse-text');
                    verseTextSpan.textContent = surahData.verse[verseKey];
                    const verseNumberSpan = document.createElement('span');
                    verseNumberSpan.classList.add('verse-number');
                    let displayVerseNum = (actualSurahIndexInJson === "001" || !surahData.verse.hasOwnProperty('verse_0')) ? verseNumFromKey : verseNumFromKey;
                    verseNumberSpan.textContent = arabicToIndianNumerals(displayVerseNum.toString());
                    verseDiv.appendChild(verseNumberSpan);
                    verseDiv.appendChild(verseTextSpan);
                    verseContainer.appendChild(verseDiv);
                });
                showSection(surahDisplaySection);
                setActiveNavLink(null); // No specific nav link is "active" when viewing a surah
                window.scrollTo(0, 0); 
            }

            function arabicToIndianNumerals(strNum) {
                const indianNumerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
                return String(strNum).replace(/[0-9]/g, (digit) => indianNumerals[+digit]);
            }
            // --- END Data Handling and Display Functions ---

            // --- START Search Functionality ---
            function handleSearch() {
                const searchTerm = searchSurahInput.value.trim().toLowerCase();
                filterSurahList(searchTerm);
            }

            function filterSurahList(searchTerm) {
                let found = false;
                document.querySelectorAll('.surah-card').forEach(card => {
                    const nameAr = card.dataset.surahNameArabic.toLowerCase();
                    const nameEn = card.dataset.surahNameEnglish.toLowerCase();
                    const nameSimple = card.dataset.surahNameSimple.toLowerCase(); // For simpler Arabic search
                    const index = card.dataset.surahIndex;
                    
                    // Basic search: by Arabic name, English name, or index number
                    if (nameAr.includes(searchTerm) || nameEn.includes(searchTerm) || nameSimple.includes(searchTerm) || index.toString() === searchTerm) {
                        card.classList.remove('hidden');
                        found = true;
                    } else {
                        card.classList.add('hidden');
                    }
                });
                noResultsMessage.style.display = found ? 'none' : 'block';
            }
            // --- END Search Functionality ---
            
            // --- START Navigation Logic ---
            function handleNavLinkClick(e) {
                e.preventDefault();
                const clickedLink = e.target.closest('a'); // Get the anchor element itself
                if(!clickedLink) return;

                setActiveNavLink(clickedLink);
                
                const targetId = clickedLink.id;
                if (targetId === 'nav-surahs') {
                    showSection(surahListSection);
                    filterSurahList(searchSurahInput.value); // re-apply search if any
                } else {
                    // Placeholder for other sections
                    showSection(mainContentArea); // Base visibility
                    surahDisplaySection.style.display = 'none';
                    surahListSection.style.display = 'none';
                    loadingIndicator.style.display = 'none';
                    noResultsMessage.style.display = 'none';

                    let placeholderSection = document.getElementById('placeholder-section');
                    if(!placeholderSection) {
                        placeholderSection = document.createElement('section');
                        placeholderSection.id = 'placeholder-section';
                        placeholderSection.style.padding = '50px';
                        placeholderSection.style.textAlign = 'center';
                        placeholderSection.style.fontSize = '1.5em';
                        mainContentArea.appendChild(placeholderSection);
                    }
                    placeholderSection.textContent = `محتوى "${clickedLink.textContent.trim()}" سيتم تطويره قريبًا بإذن الله.`;
                    placeholderSection.style.display = 'block';
                    
                    if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
                        sidebar.classList.remove('open');
                        menuToggleBtn.setAttribute('aria-expanded', 'false');
                    }
                }
            }
            // --- END Navigation Logic ---
        });
