import React from 'react';
import Image from 'next/image';
import styles from "./component.module.css"

interface PlantIconsProps {
    plantDetail: {
        drought_tolerant: boolean;
        indoor: boolean;
        flowers: boolean;
        leaf: boolean;
        edible_fruit: boolean;
        edible_leaf: boolean;
        medicinal: boolean;
        poisonous_to_humans: number;
        tropical: boolean;
    };
}

const PlantIcons: React.FC<PlantIconsProps> = ({plantDetail}) => (
    <div className={`card-text ${styles.plantIco}`}>
        {plantDetail.poisonous_to_humans === 1 && (
            <Image src="/images/warning-icon.webp" alt="danger" width={50} height={50} title="Danger"/>
        )}
        {plantDetail.drought_tolerant && (
            <Image src="/images/desert.svg" alt="drought_tolerant" width={55} height={55} title="Drought Tolerant"/>
        )}
        {plantDetail.indoor && (
            <Image src="/images/indoor.svg" alt="indoor" width={50} height={50} title="Indoor"/>
        )}
        {plantDetail.flowers && (
            <Image src="/images/flower.svg" alt="flowers" width={50} height={50} title="Flowers"/>
        )}
        {plantDetail.leaf && (
            <Image src="/images/leaf.svg" alt="leaf" width={50} height={50} title="Leaf"/>
        )}
        {(plantDetail.edible_fruit || plantDetail.edible_leaf) && (
            <Image src="/images/apple.svg" alt="edible" width={50} height={50} title="Edible"/>
        )}
        {plantDetail.medicinal && (
            <Image src="/images/medicinal.svg" alt="medicinal" width={50} height={50} title="Medicinal"/>
        )}
        {plantDetail.tropical && (
            <Image src="/images/rare.webp" alt="rare" width={50} height={50} title="Rare"/>
        )}
    </div>
);

export default PlantIcons;
