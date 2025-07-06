import { CollaboratorsSection } from "../../feature/CollaboratorsSection";
import { CommentsSection } from "../../feature/CommentsSection";
import { HeroSection } from "../../feature/HeroSection";
import { ProductCarousel } from "../../feature/ProductCarousel";
import { SectionTitle } from "../../feature/SectionTitle";

export const MainComponent = () => {
    return (
        <div className="relative ">
            <HeroSection />
            <ProductCarousel />
            <CommentsSection />
            <CollaboratorsSection />
        </div>
   );
};
