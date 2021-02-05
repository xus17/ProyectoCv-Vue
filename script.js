/* Función en jquery que hace que se vayan cambiando el active de  los componentes del navbar al bajar la barra de la pagina web. */ 
$(document).ready(function () {
    $('.navbar-nav li').on('activate.bs.scrollspy', function (e) {
        e.target.scrollIntoView();
    }
    );
});

/* App vue donde tenemos el mounted en el que se comprueba si coge los valores y sino, se quedaría la pantalla de carga. 
Tambien tenemos tres funciones, dos de ellas para cambiar el idioma, y otra para crear el modal al clicar encima de el añadiendole los valores con vue 
al pasarle la posicion del json. */ 
var app = new Vue({
    el: '#app',
    data: {
        message: '',
        idioma: true,
        show: true
    },
    mounted() {
        let url = "./Json/mijson.json";
        axios.get(url).then((response) => {
            this.message = response.data;
            this.show = false
            $("#cargando").hide();
        })
            .catch((error) => { console.log("Error"); })
    },

    methods: {
        cambiarIdiomaEsp: function () {
            this.idioma = true;
        },
        cambiarIdiomaIng: function () {
            this.idioma = false;
        },
        addModal: function (index) {
            $("#model").modal("show");
            $("#modalTitle").text(this.message.Todo.Proyectos[index].titulo);
            $("#modalTitleEng").text(this.message.Todo.Proyectos[index].tituloingles);
            $("#imgModal").attr("src", "" + this.message.Todo.Proyectos[index].imagen + "");
            $("#link2").attr("href", "" + this.message.Todo.Proyectos[index].link + "");
            $("#link1").attr("href", "" + this.message.Todo.Proyectos[index].linkrepositorio + "");
            $("#description").text(this.message.Todo.Proyectos[index].resumeningles);
            $("#descripcion").text(this.message.Todo.Proyectos[index].resumen);
            $("#tecno").text("Lenguajes de Programación Utilizados: " + this.message.Todo.Proyectos[index].tecnologiasempleadas);
            $("#tecnoEng").text("Programming languages ​​used: " + this.message.Todo.Proyectos[index].tecnologiasempleadas);
        }

    }
    ,
    computed: {

    }
})





