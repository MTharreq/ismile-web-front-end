import React from 'react';

export default function OverlayTP(props) {
    const { moduleTitle, lastUpdate, moduleNumber, linkSoal, linkSubmit } = props;
    const linkTemplate = "https://www.linkTemplate.com"
    return (
        <div className="w-full h-full shadow-md bg-white rounded-lg px-5">
            <div className="h-auto m-8 mx-48">
                <h1 className="text-xl text-[#D5546D] text-center">HARAP DIBACA</h1>
                <p className="text-sm font-normal mt-3">
                    1. Tugas Pendahuluan dikerjakan sesuai dengan NIM terakhir Praktikan.
                    <br />
                    Contoh: 1103211233 [mengerjakan soal NIM Ganjil]
                    <br />
                    Contoh: 1103211234 [mengerjakan soal NIM Genap]
                </p>
                <p className="text-sm font-normal mt-2">2. Tugas Pendahuluan dikerjakan menggunakan Template Tugas Pendahuluan di word dan dikumpulkan dalam format PDF</p>
                <p className="text-sm font-normal mt-2">3. Jika terdapat soal yang memerlukan jawaban untuk ditulis manual maka jawaban dapat di foto/scan dan kemudian di masukan ke dalam File Tugas Pendahuluan.</p>
                <p className="text-sm font-normal mt-2">4. Jawaban Tugas Pendahuluan diketik secara berurutan. Soal kemudian Jawaban.</p>
                <p className="text-sm font-normal mt-2">
                    5. Format penamaan file Tugas Pendahuluan sebagai berikut:
                    <br /><strong>TP_NAMA_NIM_MODUL_HARI_SHIFT_KELOMPOK</strong>
                    <br /><strong>Contoh: TP_MUHAMMAD HILMY AZIZ_1103190001_MODUL 1_RABU_SHIFT 2_13</strong>
                </p>
                <p className="text-sm font-normal mt-2">6. Tugas Pendahuluan dikumpulkan melalui website i-Smile dengan batas pengumpulan <strong>Hari Sabtu 23:59 WIB.</strong></p>
                <p className="text-sm font-normal mt-2">7. Seluruh informasi kebutuhan untuk Praktikum Kecerdasan Buatan dapat diakses melalui Website i-Smile.</p>
            </div>
            <hr className="mt-3 border-t-2 border-gray-300" />
            <div className="flex items-center justify-between mt-2 ">
                    <div className="">
                        <p className="text-xs font-normal mt-2 text-[#1CAB43]">Tugas Pendahuluan</p>
                        <p className="text-sm font-normal mt-2"><strong>Modul {moduleNumber}: {moduleTitle}</strong></p>
                        <p className="text-xs font-normal mt-2">Due Date: Monday, 7 September 2023,23:59</p>
                        <p className="text-xs font-normal mt-2">Time Remaining: 1 Hour 23 Min.</p>
                        <p className="text-xs font-normal mt-2">Last Modified: {lastUpdate}</p>
                    </div>
                    <div className="flex flex-col items-center pt-5">
                    <a href="https://www.linkTemplate.com" target="_blank" rel="noopener noreferrer" className="bg-[#4DD7BE] text-white text-xs px-3 py-2 rounded mb-2">Template Tugas Pendahuluan</a>
                    <a href={linkSoal} target="_blank" rel="noopener noreferrer" className="bg-[#4DD7BE] text-white text-xs px-7 py-2 rounded mb-2">Soal Tugas Pendahuluan</a>
                    <a href={linkSubmit} target="_blank" rel="noopener noreferrer" className="text-black text-xs px-3 py-2 rounded mb-2">Submit File</a>
                    </div>
                </div>
            </div>
    )
}
