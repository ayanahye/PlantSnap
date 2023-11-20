
import React from 'react';
import Image from 'next/image';

interface PlantIconsProps {
  plantDetail: {
    drought_tolerant: boolean;
    indoor: boolean;
    flowers: boolean;
    leaf: boolean;
    edible_fruit: boolean;
    edible_leaf: boolean;
    medicinal: boolean;
  };
}

const PlantIcons: React.FC<PlantIconsProps> = ({ plantDetail }) => (
  <div className="card-text plantIco">
    {plantDetail.drought_tolerant && (
      <Image src="/images/desert.svg" alt="drought_tolerant" width={55} height={55} />
    )}
    {plantDetail.indoor && (
      <Image src="/images/indoor.svg" alt="indoor" width={50} height={50} />
    )}
    {plantDetail.flowers && (
      <Image src="/images/flower.svg" alt="flowers" width={50} height={50} />
    )}
    {plantDetail.leaf && (
      <Image src="/images/leaf.svg" alt="leaf" width={50} height={50} />
    )}
    {(plantDetail.edible_fruit || plantDetail.edible_leaf) && (
      <Image src="/images/apple.svg" alt="edible" width={50} height={50} />
    )}
    {plantDetail.medicinal && (
      <Image src="/images/medicinal.svg" alt="medicinal" width={50} height={50} />
    )}
  </div>
);

export default PlantIcons;
