export function config(type) {
    switch(type) {
        case 'datatable':
            return {
                null: '-',
                length_menu: [5, 10, 20, 50, 100],
                show_filter: true,
                show_pagination: true,
                pagination: 'advance',
                language: {
                    loading_text: "Sedang mengambil data...",
                    no_data_text: "Data tidak ditemukan",
                    pagination: {
                        first: "Pertama",
                        previous: "Sebelumnya",
                        next: "Berikutnya",
                        last: "Terakhir"
                    }
                },
                //tableClass: 'table table-bordered table-striped table-hover'
                tableClass: 'table table-hover'
            }
        case 'appName':
            return {
                long    : 'Sistem Informasi Keuangan',
                short   : 'SIMKEU'
            }
        case 'appOwner':
            return {
                parent    : 'Kementerian Investasi',
                child     : 'BKPM'
            }
        default:
            return null
    }
}