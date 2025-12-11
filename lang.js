const translations = {
    vi: {
        index: {
        index: "Giới thiệu",
        projects: "Dự án",
        head: "Lập trình viên",
        intro:"Giới thiệu bản thân",
        intro_desc: "Tôi là cử nhân tốt nghiệp Trường Đại học Khoa học Ứng dụng HAMK (Häme University of Applied Sciences),chuyên ngành Ứng dụng Máy tính. Tôi đam mê công nghệ và lập trình từ nhỏ, mong muốn phát triển sự nghiệp trong lĩnh vực phát triển web và cơ sở dữ liệu.Tôi là người kiên nhẫn, linh hoạt và có tư duy logic. Thành thạo trong các lĩnh vực như thiết kế/phát triển web mobile, xử lý và phân tích dữ liệu, thiết kế cơ sở dữ liệu, RPA và phát triển game.",
        exp: "Kinh nghiệm & Kỹ năng",
        exp_desc: `
            <li>Thiết kế/phát triển web - mobile</li>
            <li>Xử lý và phân tích dữ liệu</li>
            <li>Thiết kế cơ sở dữ liệu, quản lý dữ liệu đám mây</li>
            <li>RPA - Robotic Process Automation (UiPath, Power Apps)</li>
            <li>Điện toán đám mây & AI</li>
            <li>Phát triển game (Godot, Unity, 3D Modeling)</li>
        `,
        skill: "Kỹ năng lập trình",
        skill_desc: `
            <li>Python, JavaScript, C++, Java</li>
            <li>React Native & đa nền tảng</li>
            <li>Power BI, phân tích dữ liệu</li>
        `,
        language: "Ngoại ngữ",
        language_desc: "Tiếng Việt: Bản ngữ<br>Tiếng Anh: Nâng cao",
        study: "Học vấn",
        study_desc: "<strong>HAMK – Häme University of Applied Sciences</strong><br>Cử nhân chuyên ngành Ứng dụng Máy tính",
        },

        projects: {
        index: "Giới thiệu",
        projects: "Dự án",
        page_title: "Dự Án",

        // Project 1
        p1_title: "1. Dự án ứng dụng di động (Mobile Application Project)",
        p1_desc: `
            <li>Phát triển ứng dụng di động đa nền tảng bằng <strong>React Native</strong> hoặc <strong>Flutter</strong>.</li>
            <li>Xây dựng giao diện người dùng, chức năng đăng nhập và quản lý dữ liệu.</li>
            <li>Áp dụng mô hình <strong>MVVM</strong> / component-based và kết nối API backend.</li>
        `,

        // Project 2
        p2_title: "2. Dự án giải pháp doanh nghiệp trên nền tảng đám mây (Cloud-Based Business Solution)",
        p2_desc: `
            <li>Xây dựng ứng dụng web hoạt động trên nền tảng điện toán đám mây (<strong>Azure</strong> hoặc <strong>AWS</strong>).</li>
            <li>Thiết kế và quản lý cơ sở dữ liệu cloud.</li>
            <li>Triển khai <strong>serverless functions</strong> và quy trình xử lý dữ liệu có khả năng mở rộng.</li>
        `,

        // Project 3
        p3_title: "3. Dự án ICT – Phát triển phần mềm theo quy trình hoàn chỉnh",
        p3_desc: `
            <li>Tham gia dự án nhóm theo mô hình <strong>Agile</strong>.</li>
            <li>Tham gia vào thiết kế, lập trình, kiểm thử và giao tiếp với khách hàng.</li>
            <li>Hoàn thành sản phẩm phần mềm và báo cáo đúng tiến độ.</li>
        `,

        // Project 4
        p4_title: "4. Dự án phát triển website (Web Application Development)",
        p4_desc: `
            <li>Phát triển website responsive bằng <strong>HTML/CSS/JavaScript</strong> hoặc <strong>React</strong>.</li>
            <li>Xây dựng backend bằng <strong>Node.js / Python / PHP</strong>.</li>
            <li>Tích hợp cơ sở dữ liệu, đăng nhập người dùng và triển khai lên hosting/cloud.</li>
        `,

        // Project 5
        p5_title: "5. Dự án phân tích dữ liệu và Business Intelligence",
        p5_desc: `
            <li>Xây dựng dashboard BI bằng <strong>Power BI</strong> hoặc <strong>Tableau</strong>.</li>
            <li>Thực hiện xử lý dữ liệu, ETL, trực quan hóa dữ liệu và theo dõi KPI.</li>
            <li>Phân tích mô hình kinh doanh và đưa ra insights.</li>
        `,

        // Project 6
        p6_title: "6. Dự án tự động hóa quy trình bằng RPA",
        p6_desc: `
            <li>Tạo quy trình tự động hóa bằng <strong>UiPath</strong> hoặc <strong>Power Automate</strong>.</li>
            <li>Tự động nhập liệu, xử lý file hoặc tạo báo cáo.</li>
            <li>Giảm thiểu thao tác thủ công và tăng hiệu quả công việc.</li>
        `,

        // Project 7
        p7_title: "7. Dự án phát triển game",
        p7_desc: `
            <li>Phát triển game <strong>2D hoặc 3D</strong> bằng <strong>Unity</strong> hoặc <strong>Godot</strong>.</li>
            <li>Xây dựng gameplay, giao diện, hệ thống vật lý và quản lý tài nguyên.</li>
            <li>Tạo mô hình 3D và hoạt cảnh cho các phân đoạn trong game.</li>
        `,

        // Project 8
        p8_title: "8. Dự án Trí tuệ nhân tạo / Machine Learning",
        p8_desc: `
            <li>Xây dựng mô hình học máy (phân loại, dự đoán) bằng <strong>Python</strong>.</li>
            <li>Huấn luyện mô hình bằng <strong>Scikit-learn, TensorFlow hoặc PyTorch</strong>.</li>
            <li>Tích hợp mô hình vào ứng dụng nhỏ hoặc API.</li>
        `,

        // Project 9
        p9_title: "9. Dự án IoT – Cloud & Backend cho HitoAI",
        p9_intro: "Tham gia phát triển một sản phẩm IoT mới cho công ty HitoAI trong 5 tháng. Công việc liên quan đến kiến trúc IoT, Cloud database, IoT Hub, cloud server và kết nối thiết bị.",
        p9_desc: `
            <li><strong>Tuya IoT Platform</strong>: Tạo web app với React + Python Flask để nhận dữ liệu thiết bị qua Tuya API và điều khiển từ xa.</li>
            <li><strong>Firebase</strong>: Lưu trữ dữ liệu IoT và deploy frontend lên Firebase Hosting.</li>
            <li><strong>Render</strong>: Triển khai backend Flask lên Render để hoạt động 24/7.</li>
            <li><strong>Python Flask</strong>: Tạo tính năng cron job cập nhật dữ liệu 2 giờ/lần và điều chỉnh theo thời gian trong ngày.</li>
            <li><strong>ThingSpeak Research</strong>: Đánh giá nền tảng IoT thay thế Tuya nhưng không phù hợp.</li>
            <li><strong>MongoDB</strong>: Kiểm tra như database thay thế nhưng không được chọn.</li>
            <li><strong>PostgreSQL</strong>: Thành công tích hợp như database chính.</li>
            <li><strong>AWS IoT Core</strong>: Thử nghiệm kết nối thiết bị IoT và đồng bộ dữ liệu với PostgreSQL.</li>
        `
        }
    },

    en: {
        index: {
        index: "About me",
        projects: "Projects",
        head: "Software Developer",
        intro:"Introduction",
        intro_desc: "I am a graduate of Hamk University with a Bachelor's degree in Computer Applications. I have been passionate about technology and programming since childhood, and I aspire to build a career as a web and database developer. I am well-versed in my different programing fields such as Web and mobile design/development, data process and analysis, database design, RPA and basic game development. As for my character, I think I am a patient, adaptive and logical person.",
        exp: "Experience & Skills",
        exp_desc: `
            <li>Web & mobile development</li>
            <li>Data processing and data analysis</li>
            <li>Database design and cloud data management</li>
            <li>Robotic Process Automation (UiPath, Power Apps)</li>
            <li>Cloud computing & artificial intelligence</li>
            <li>Game development (Godot, Unity, 3D modeling)</li>
        `,
        skill: "Programming Skills",
        skill_desc: `
            <li>Python, JavaScript, C++, Java</li>
            <li>React Native & cross-platform development</li>
            <li>Power BI & data analytics</li>
        `,
        language: "Language",
        language_desc: "Vietnamese: Native<br>English: Advance",
        study: "Study",
        study_desc: "<strong>HAMK – Häme University of Applied Sciences</strong><br>Bachelor’s degree in Computer Applications",
        },

        projects: {
        page_title: "Projects",

        // Project 1
        p1_title: "1. Mobile Application Project",
        p1_desc: `
            <li>Developed cross-platform mobile apps using <strong>React Native</strong> or <strong>Flutter</strong>.</li>
            <li>Built UI, login system, and data management features.</li>
            <li>Applied <strong>MVVM</strong> / component-based architecture and backend API integration.</li>
        `,

        // Project 2
        p2_title: "2. Cloud-Based Business Solution",
        p2_desc: `
            <li>Developed cloud-based web applications on <strong>Azure</strong> or <strong>AWS</strong>.</li>
            <li>Designed and managed cloud databases.</li>
            <li>Implemented <strong>serverless functions</strong> and scalable data pipelines.</li>
        `,

        // Project 3
        p3_title: "3. ICT Project – Full Software Development Lifecycle",
        p3_desc: `
            <li>Participated in team projects following the <strong>Agile</strong> methodology.</li>
            <li>Contributed to design, implementation, testing, and client communication.</li>
            <li>Delivered software and documentation on schedule.</li>
        `,

        // Project 4
        p4_title: "4. Web Application Development",
        p4_desc: `
            <li>Developed responsive websites using <strong>HTML/CSS/JavaScript</strong> or <strong>React</strong>.</li>
            <li>Built backend systems with <strong>Node.js / Python / PHP</strong>.</li>
            <li>Integrated databases, user authentication, and deployed to hosting/cloud services.</li>
        `,

        // Project 5
        p5_title: "5. Data Analytics & Business Intelligence",
        p5_desc: `
            <li>Built BI dashboards using <strong>Power BI</strong> or <strong>Tableau</strong>.</li>
            <li>Performed data processing, ETL, visualization, and KPI tracking.</li>
            <li>Analyzed business patterns and produced actionable insights.</li>
        `,

        // Project 6
        p6_title: "6. Robotic Process Automation (RPA)",
        p6_desc: `
            <li>Created automation workflows with <strong>UiPath</strong> or <strong>Power Automate</strong>.</li>
            <li>Automated data entry, file handling, and report generation.</li>
            <li>Reduced manual work and improved operational efficiency.</li>
        `,

        // Project 7
        p7_title: "7. Game Development",
        p7_desc: `
            <li>Developed <strong>2D or 3D games</strong> using <strong>Unity</strong> or <strong>Godot</strong>.</li>
            <li>Designed gameplay, UI, physics, and resource management.</li>
            <li>Created 3D models and animations for in-game content.</li>
        `,

        // Project 8
        p8_title: "8. Artificial Intelligence / Machine Learning",
        p8_desc: `
            <li>Built machine learning models (classification, regression) with <strong>Python</strong>.</li>
            <li>Trained models using <strong>Scikit-learn, TensorFlow, or PyTorch</strong>.</li>
            <li>Integrated ML models into small applications or APIs.</li>
        `,

        // Project 9
        p9_title: "9. IoT – Cloud & Backend for HitoAI",
        p9_intro: "Worked on developing a new IoT product for HitoAI during a 5-month work placement, involving IoT architecture, cloud database, IoT hub, cloud server, and device connectivity.",
        p9_desc: `
            <li><strong>Tuya IoT Platform</strong>: Built a React + Flask web app that receives device data via Tuya API and controls devices remotely.</li>
            <li><strong>Firebase</strong>: Stored IoT data and deployed the frontend using Firebase Hosting.</li>
            <li><strong>Render</strong>: Hosted Flask backend on Render for 24/7 operation.</li>
            <li><strong>Python Flask</strong>: Created scheduled tasks to fetch data every 2 hours and adjust values based on time of day.</li>
            <li><strong>ThingSpeak Research</strong>: Evaluated ThingSpeak as a replacement for Tuya but found it unsuitable.</li>
            <li><strong>MongoDB</strong>: Tested as a Firebase alternative, but not selected.</li>
            <li><strong>PostgreSQL</strong>: Successfully integrated as the primary database.</li>
            <li><strong>AWS IoT Core</strong>: Tested IoT device connectivity and syncing with PostgreSQL.</li>
        `
        }
    }
};

function setLanguage(lang) {
    const page = document.body.dataset.page;
    const dict = translations[lang][page];
    for (const key in dict) {
        const el = document.getElementById(key);
        if (el) {
            el.innerHTML = dict[key]
        };
    }
    localStorage.setItem("site-language", lang);
}

window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("site-language");
    setLanguage(saved);
});