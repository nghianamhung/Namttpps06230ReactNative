var flatListData = [
  {
      "key": "1",
      "name": "STEELSERIES 300",   
      "imageUrl": "https://www.webantics.com/content/images/thumbs/004/0042503_steelseries-rival-100-optical-gaming-mouse-black_100.jpeg",    
      "foodDescription": "Best Mouse Gaming",
      "price": "1,300,000. VND"
  },
  {
      "key": "2",
      "name": "CORSAIR K63 ",        
      "imageUrl": "http://product.hstatic.net/1000238880/product/bht-ban-phim-corsair-k63-2-1_small.jpg",    
      "foodDescription": "Best Keyboard Gaming",
      "price": "2,500,000. VND"
  },
  {
      "key": "3",
      "name": "MSI GAMING GP62 6QE",
      "imageUrl": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEhAQEBASFRAWFhAWFRIVFRgRDhYRFhUZFhcVFR8ZKCggGB0mHRUVIjEhJSorLi4uGSAzODMtNyotLisBCgoKDg0OGhAQGi0mHx0tLTUtLS0vLS0rNy0rKy0tLS0tLS0tLS0rLS0tLS0tKystLS0rLS0rLS0rKystLS0tLf/AABEIAGQAZAMBEQACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAwQFBwIGCAH/xABFEAABAgQDAwgGBQkJAAAAAAABAhEAAwQhBRIxBkFRBxMiMmFxkdEjQoGhscEWVJKT8BQVM1JyhJSisiQlU2NzgoOjs//EABoBAQEAAwEBAAAAAAAAAAAAAAABAgMEBQb/xAAkEQEAAgICAQUBAAMAAAAAAAAAAQIDEQQhEgUTIiMxQVFhgf/aAAwDAQACEQMRAD8AvGAIAgCAIAgCAIAgCAIAgCAIBCfVS0NzkxCX0zKCX7ngGxxuk31Uj71HnAJL2koRrWU33yPOASXtZhw1rqb71J+BgEV7a4YNa2R9p/hAJjbzCvr0nxPlAKI22ws6V1P9sD4wGY2wwz6/S/eoHzgFU7VYcdK6l+/l+cAqnaKhOlZTH/ml+cA/lzAoBSSCkgEEXSQdCCNRAKQBAVtysrIVIPBE09juPKAohe11QfVlfZV5w2sVIK2hnn1ZfgfOJMQsVtJJeNTt4R4HzixK2p/skcVmncnwPnCemNK7nSTkUE8yjP6AQLElwOPHtjVGV6M+nXivn+QiTXL7PA+cZ7efOPvcsfzgvs9/nGSPRiK+z8e2CHuFValrylmYn22gOqthFPh9GSX9EgeFvlAT0AQFZ8rR6SP9GZ4uYCjNnsLlzD6Xq9llPwjj5HIvX8fQ+m+nRkru0Npn7FSylPNKF+LBXcBqe/SOfHmy2bc3G4uK2plC4xsguUlSgQQNW1HeI2V5E77c9+Lx71+qWvU9KAXVYeW6Om1+unPg4njb5FqqumKQJRLSgSrLuc2c8Ta0SlNMuTyL5PjPUI+arcNPfG2Hn5J3Hj/CLRm0giCJHAP0o7lQR1byeKfDqP8AYV7lqEBscB5BJVdyurZQ7KdZ96/KEyyifnCl8FqVLWi+VQZlaEnt3H2+McGeun1npuf3f3rSy6anSefmzVHMky1ZAoolqCm6XRCi2o9jA2iUt0wzYsfuRWI7t/UbVNMqJYlIUmWErUpBmGYjqtYkWcqTre8aOVmilJ024+HWtomf2EliuGUNHhgn1FJLnVM6aOZQpwQfVDoIVlZJUQDfMAdY6uNH1R5fsvM5+b3uTPh1EFdq6SiknC6ZGG0SsRnZM4yFNPLfKFqUlJBWHKmzEsEEx1Q8u3lJtj8vBJWKpTMw95CJSUq5mWo0/wCUKUFDnEo6zII0B61wWDZaapif8mlRsyTXy6Zf5EaUhc55VJJkz0IQoZEKABsVFIuTmAV2xWESrXaerlrqZ4kpQJAWyGly5ZKUdEK9GEi9zpvDwWTfAP0ye5f9Jgjqnk2P93UvdM/9FwGzwHkIFW8rYeZo4Eg29q7RheW3j18ssKUnTUIOXIEHsJJb4eMckVm37L6i+bHhmK1ro5oMemSlZ82YFJSyrkJO62nGx3RspWK/xw3yzafKTmn2uyKJCAEkEMCdL7y5+PujnzcP3p7b6+oVrMbR2IY0upmJKpy05eoCtRQg26uuXQXHARvx0nHWIj+OW+XHmyTMdMaldRnE1U6cZgDJm51LWE3sFO4FzYcTGUXY24tZNVVtUnMpNVNuXLTFgk8TfXvjbF3Fl4mu9mKK+ekqUmdMCldZQWoKV+0Qb+2NjkmujQQYJHAP08v/AH/0GCupuTBT4dI7DNH/AGKPzgNrgPIEqm5XiecnKG6lPuzn5wZ0tpQMycVRqiunXfPa6SwxFGUf2iZOTMea+UBSCkITzYuHBKypzewZg7xk0xa8HCZNAmfTMvNJMxAnJUZjc2pZBUFBKCGQxPaQzh4ya5mSNGjDy/PTJyVc6oPLAUkSXTlVcObZxq+hYsxaTzmGNBUSsigqZlLliQosLMQE6m5d9w0MabU7ergz4/Znyn5Hc9eGE2mVRSToUoCwMoDKZx1nU4e3RZzmGcVcF+Re0algJeFkn0lQ3pGdshOZfNkkB0jKJeYMdVEHdGxomUPiiZImqEhRVKZOUkEEnKM1jdszgdjQYs8EPp5fef6TAdRclKnw9HYuaP5n+cBuMAQFQ8qlbLFUuUtSWMpCSlRZ0qCnGvAwFXTaOjGiZf2yfnElYtaDSbIptyUfaJ+cIhl5zJsuTI3JT4nzip5sBIkOHAazsbtvaCbOqsUGX0UqalTDrLCku99ALN+OMmO06/6jhLlcB74sm5noqlEjelPvgFEop/1U++AcU/MJIUkJBG+7wHQPI1PC8PJB0nTR/Kg/OA3uASnzUpSpaiAlIJJOgSA5PhAc4bQVs+vrame6+ZuEpzFKMo6KQw17eJeAi0bOpW2Y5crhYSpi72NwejdN+/hF0jIbHo3rXbXpAaiyxbq3D954XaB9DENdUxwLspJD/rAM+Xiz7+x2hivY9Hqma/7SVWv0xlHSSzOz6Hil2govY6Xdud3N00q6Ll1DKDmAb1X07U5mgl9DUf5p6SfWSeg6XIYHMWzdUlm0NszQxVsrIBIecSFaJVLU6WB1Zn14twhoN6XAJahMGWaMi02zIByK0JLcSq+nR7Img5+jiEgqImFlKSpigm90lIZ9G9p3XAqrD5FMRVTrmUM4kJmKKkPbptw3Ege4RBc8Bo/KhiuWQKVCmXO65Gokg38Tb2GAqPEcRlyEZeYQsdpILcHaA1hO06kl0U9OL26BJyvopiArvIcahi0XaFZW0c1dxJkpAPqpIL2dySSRZLB2GUMBDYUGKTS3QQPYX7tdOzSGwr+cJuuVHvHwP4cw2ParHJqEKVzUokZS6s36wBFiOOuva8NiOO2E67SZF8vqrsBuBzOHu+/tsGbCU/aqcp3lSQdxHOODxHS+LiGxiraaYSpXNSukkJIeazB29d98TYd0+1U9asplyrhKS2f1dD1mf3WFrRVbthi3TLWlkTEFKkFL2UL7yYgvPA8RFRIlzh6wuOCxZQ8XgK05ScFr1VSp0qSudKUlATzaTMWkJSAUkAhulmPC/GIzrFWiVuzuITAyqCu9lOfODKfBEL2ErPqOIfwxgnwZydjKxNhSYgP3VR+UD4FxslW/4GID9yUflBfqKJ2UrtOarx30Kz8BA+onP2QrVApVLriCzj8hmjt3CB9Rn9Aan6tiB/c5g+MD6mP0BrN1FiH8KsQPrZJ5Pa46UFd9zl+JgbxnNLye4kkumgqvahCfiqCbxp+j2XxsME0M0d5lD4rgbxrN2N2er5VO0+bzcxSyrmwxygpSGOVw9joYrBvMGPQgdCB0IHQgvYgdiB2IHYgCAIIIK9gCAIAgCAIAgCAIAgCAIAgCA//Z",    
      "foodDescription": "Best Laptop Gaming",
      "price": "23,500,000. VND"
  },
  {
      "key": "4",
      "name": "XBOX ONE WIRELESS CONTROLLER",        
      "imageUrl": "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1la61?ver=389b&m=6&w=100&h=100&n=t&q=60&o=f",    
      "foodDescription": "Best Controller Gaming",
      "price": "2,900,000. VND"
  },
  
  
];
module.exports = flatListData;