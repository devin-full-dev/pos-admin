import React from "react";
import { Image } from "lucide-react";

function ProductImage({ src, name = '', className }) {

    return src ? (
        <img
            src={src}
            alt={name}
            className={`object-cover ${className}`}
            onError={null}
        />
    ) : (
        <div className={`flex items-center justify-center ${className}`}>
            <Image size="80" className="text-gray-600" strokeWidth={1} />
        </div>
    );
}

export default ProductImage;
