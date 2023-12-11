
const propiedades_venta = [
    {
      title: "Apartamento de lujo en zona exclusiva",
      src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      description:
        "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
      address: "123 Luxury Lane, Prestige Suburb, CA 45678",
      bedrooms: 4,
      bathrooms: 4,
      price: 5000,
      smoking: false,
      pets: false,
    },
    {
      title: "Apartamento acogedor en la montaña",
      src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      description:
        "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
      address: "789 Mountain Road, Summit Peaks, CA 23456",
      bedrooms: 2,
      bathrooms: 1,
      price: 1200,
      smoking: true,
      pets: true,
    },
    {
      title: "Penthouse de lujo con terraza panorámica",
      src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      description:
        "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares y acabados de alta calidad",
      address: "567 Skyline Avenue, Skyview City, CA 56789",
      bedrooms: 3,
      bathrooms: 3,
      price: 4500,
      smoking: false,
      pets: false,
    },
    {
      title: "Apartamento moderno en el distrito financiero",
      src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      description:
        "Este apartamento de diseño moderno está ubicado en el centro del distrito financiero",
      address: "890 Financial Avenue, Downtown City, CA 78901",
      bedrooms: 2,
      bathrooms: 2,
      price: 2800,
      smoking: false,
      pets: true,
    },
    {
      title: "Loft industrial con estilo urbano",
      src: "https://images.unsplash.com/photo-1628611225249-6c3c7c689552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9mdHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
      description:
        "Este loft industrial ofrece un estilo urbano único",
      address: "101 Urban Street, Urbanville, CA 34567",
      bedrooms: 1,
      bathrooms: 1,
      price: 1600,
      smoking: true,
      pets: false,
    },
  ];


  const mostrarpropiedades_venta = () => {
    const container = document.getElementById("soloPropiedadesVenta");
  
    // ARRAY DE OBJETOS 👇 QUE SE RECONOCE AL LLAMARLO,
    //  POR EL ENLAZAMIENTO DE LOS ARHCIVOS EN EL HTML.
  
    propiedades_venta.forEach((propiedad) => {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4";
      card.innerHTML = `
      <div class="card">
      <img
        src="${propiedad.src}"
        class="card-img-top"
        alt="Imagen de la propiedad"
      />
      <div class="card-body">
        <h5 class="card-title">${propiedad.title}</h5>
        <p class="card-text">${propiedad.description}</p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${propiedad.address}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${propiedad.bedrooms} Habitaciones |
          <i class="fas fa-bath"></i> ${propiedad.bathrooms} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad.price}</p>
        <p class="${propiedad.smoking ? "text-success" : "text-danger"}">
              <i class="fas ${
                propiedad.smoking ? "fa-smoking" : "fa-smoking-ban"
              }"></i>
              ${
                propiedad.smoking ? "Está permitido fumar" : "No se permite fumar"
              }
            </p>
            <p class="${propiedad.pets ? "text-success" : "text-danger"}">
              <i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban"}"></i>
              ${
                propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"
              }
            </p>
      </div>
    </div>
  </div>
      `;
      container.appendChild(card);
    });
  };
  
  mostrarpropiedades_venta();
  