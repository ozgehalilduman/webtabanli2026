const grid = document.querySelector('#studentGrid');
const countSpan = document.querySelector('#studentCount');
let ogrenciler = [
            {
                adSoyad: "Hüseyin ÖNCEL",
                no: "157",
                sinif: "AMP-11/A",
                alan: "Bilişim Teknolojileri Alanı",
                dal: "Yazılım Geliştirme Dalı",
                avatarNormal: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=50",
                avatarHover: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=0"
            },
            {
                adSoyad: "Mehmet Ali DURUSOY",
                no: "852",
                sinif: "AMP-11/A",
                alan: "Bilişim Teknolojileri Alanı",
                dal: "Yazılım Geliştirme Dalı",
                avatarNormal: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayse&translateY=50",
                avatarHover: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayse&translateY=0"
            },
            {
                adSoyad: "Efe KOÇER",
                no: "575",
                sinif: "AMP-11/A",
                alan: "Bilişim Teknolojileri Alanı",
                dal: "Yazılım Geliştirme Dalı",
                avatarNormal: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&translateY=50",
                avatarHover: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&translateY=0"
            },
            {
                adSoyad: "Tuna Avcı",
                no: "981",
                sinif: "AMP-11/A",
                alan: "Bilişim Teknolojileri Alanı",
                dal: "Yazılım Geliştirme Dalı",
                avatarNormal: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=50",
                avatarHover: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=0"
            },
            {
                adSoyad: "Erhan Namal",
                no: "432",
                sinif: "AMP-11/A",
                alan: "Bilişim Teknolojileri Alanı",
                dal: "Yazılım Geliştirme Dalı",
                avatarNormal: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=50",
                avatarHover: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=0"
            },
            {
                adSoyad: "Doğaç Tubay Cesim",
                no: "554",
                sinif: "AMP-11/A",
                alan: "Bilişim Teknolojileri Alanı",
                dal: "Yazılım Geliştirme Dalı",
                avatarNormal: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=50",
                avatarHover: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=0"
            },
            {
                adSoyad: "Kaan Söylemez",
                no: "541",
                sinif: "AMP-11/A",
                alan: "Bilişim Teknolojileri Alanı",
                dal: "Yazılım Geliştirme Dalı",
                avatarNormal: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=50",
                avatarHover: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=0"
            },
            {
                adSoyad: "Anıl Doğan",
                no: "635",
                sinif: "AMP-11/A",
                alan: "Bilişim Teknolojileri Alanı",
                dal: "Yazılım Geliştirme Dalı",
                avatarNormal: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=50",
                avatarHover: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=0"
            },
            {
                adSoyad: "Beril ŞAHİN",
                no: "527",
                sinif: "AMP-11/A",
                alan: "Bilişim Teknolojileri Alanı",
                dal: "Yazılım Geliştirme Dalı",
                avatarNormal: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=50",
                avatarHover: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=0"
            },
            {
                adSoyad: "Yunus Emre TAŞAR",
                no: "1839",
                sinif: "AMP-11/A",
                alan: "Bilişim Teknolojileri Alanı",
                dal: "Yazılım Geliştirme Dalı",
                avatarNormal: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=50",
                avatarHover: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=0"
            },
            {
                adSoyad: "Ayşegül Yücel",
                no: "523",
                sinif: "AMP-11/A",
                alan: "Bilişim Teknolojileri Alanı",
                dal: "Yazılım Geliştirme Dalı",
                avatarNormal: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=50",
                avatarHover: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=0"
            },
            {
                adSoyad: "Ali DOĞRU",
                no: "423",
                sinif: "AMP-11/A",
                alan: "Bilişim Teknolojileri Alanı",
                dal: "Yazılım Geliştirme Dalı",
                avatarNormal: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=50",
                avatarHover: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=0"
            },
            {
                adSoyad: "Bayram Efe ACAR",
                no: "673",
                sinif: "AMP-11/A",
                alan: "Bilişim Teknolojileri Alanı",
                dal: "Yazılım Geliştirme Dalı",
                avatarNormal: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=50",
                avatarHover: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=0"
            },
            {
                adSoyad: "Umut Remzi GELEŞ",
                no: "1740",
                sinif: "AMP-11/A",
                alan: "Bilişim Teknolojileri Alanı",
                dal: "Yazılım Geliştirme Dalı",
                avatarNormal: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=50",
                avatarHover: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=0"
            },
            {
                adSoyad: "Ben Jason Mueller",
                no: "751",
                sinif: "AMP-11/A",
                alan: "Bilişim Teknolojileri Alanı",
                dal: "Yazılım Geliştirme Dalı",
                avatarNormal: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=50",
                avatarHover: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=0"
            },
            {
                adSoyad: "Polina Kirillova",
                no: "551",
                sinif: "AMP-11/A",
                alan: "Bilişim Teknolojileri Alanı",
                dal: "Yazılım Geliştirme Dalı",
                avatarNormal: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=50",
                avatarHover: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=0"
            },
            {
                adSoyad: "Amelia Elena Matcovschi",
                no: "533",
                sinif: "AMP-11/A",
                alan: "Bilişim Teknolojileri Alanı",
                dal: "Yazılım Geliştirme Dalı",
                avatarNormal: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=50",
                avatarHover: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kimberly&translateY=0"
            }
            
        ];

ogrenciler.forEach(ogrenci => {
    //alert(ogrenci.adSoyad); // Öğrenci adını gösteren bir uyarı kutusu
    countSpan.innerText = `${ogrenciler.length} KAYIT`;
    const card = document.createElement('div');
    card.className = "group shadow-md bg-white dark:bg-gray-800 border dark:border-gray-700 p-5 rounded-[2rem] hover:shadow-xl transition-all duration-300 relative overflow-hidden"; 
    card.innerHTML = `
        <div class="relative shadow-xl w-32 h-32 mb-5 bg-gray-50 dark:bg-gray-900 rounded-full overflow-hidden border-2 border-transparent group-hover:border-blue-500 transition-colors mx-auto">
            <img src="${ogrenci.avatarNormal}" 
                    class="absolute inset-0 w-full h-full object-cover transition-all duration-500 z-20 group-hover:opacity-0 group-hover:-translate-y-8" alt="normal">
            <img src="${ogrenci.avatarHover}" 
                    class="absolute inset-0 w-full h-full object-cover transition-all duration-500 z-10 opacity-0 scale-95 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0" alt="hover">
        </div>

        <div class="space-y-0.5 text-left w-full">
            <h3 class="font-black text-xl leading-tight group-hover:text-blue-600 transition-colors capitalize">
                ${ogrenci.adSoyad.toLowerCase()}
            </h3>
            <p class="text-sm font-bold text-blue-500 font-mono tracking-tighter">Okul No: ${ogrenci.no}</p>
            <p class="text-xs font-semibold text-gray-400">${ogrenci.sinif}</p>
            
            <div class="mt-3 pt-3 border-t dark:border-gray-700">
                <p class="text-[13px] text-gray-600 dark:text-gray-300 leading-tight">${ogrenci.alan}</p>
                <p class="text-[13px] font-bold text-slate-800 dark:text-slate-200 leading-tight italic">${ogrenci.dal}</p>
            </div>
        </div>
    `;
    grid.appendChild(card);
});