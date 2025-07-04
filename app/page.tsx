
import Image from "next/image";
import styles from "./page.module.css";
import { stripe } from "@/lib/stripe";
import Link from "next/link";
import { Carousel } from "@/components/carousel";
;
export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div>
 
      <div className={styles.heroSection}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>Welcome to My Ecommerce</h1>
          <p className={styles.subtitle}>
            Discover the latest products at the best prices.
          </p>
          <Link href="/products" className={styles.browseButton}>
            Browse All Products
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={products.data[0].images[0]}
            alt="Featured Product"
            width={350}
            height={400}
            className={styles.image}
          />
        </div>
      </div>

    
      <div className={styles.carouselWrapper}>
        <Carousel products={products.data} />
      </div>
      
    </div>
  );
}


// import Image from "next/image";
// import styles from "./page.module.css";
// import { stripe } from "@/lib/stripe";
// import Link from "next/link";
// import {Carousel} from "@/components/carousel"
// export default async function Home() {
//   const products = await stripe.products.list({
//     expand: ["data.default_price"],
//     limit: 5,
//   });

//   return (
//     <div className={styles.heroSection}>
//       <div className={styles.textContainer}>
//         <h1 className={styles.heading}>Welcome to My Ecommerce</h1>
//         <p className={styles.subtitle}>
//           Discover the latest products at the best prices.
//         </p>
//         <Link href="/products" className={styles.browseButton}>
//           Browse All Products
//         </Link>
//       </div>
//       <div className={styles.imageContainer}>
//         <Image
//           src={products.data[0].images[0]}
//           alt="Featured Product"
//           width={350}
//           height={400}
//           className={styles.image}
//         />
//       </div>
//       <section className="carousel-wrapper w-full mt-16 px-4 text-center">
//         <Carousel products={products.data}/>
//       </section>
//     </div>
//   );
// }
