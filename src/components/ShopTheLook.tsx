import Image from 'next/image';
import type { AffiliateProduct } from '@/lib/guides-data';

export default function ShopTheLook({ products }: { products: AffiliateProduct[] }) {
  return (
    <div className="border border-gray-100 rounded-xl bg-white overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100">
        <h3 className="font-display font-bold text-gray-900">Shop the Look</h3>
        <p className="text-xs text-gray-400 mt-0.5">Prices may vary. We may earn a small commission.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {products.map((p, i) => {
          const originalPrice = `$${(parseFloat(p.price.replace('$', '')) * 1.3).toFixed(0)}`;
          return (
            <a key={i} href={p.url} target="_blank" rel="noopener noreferrer nofollow"
              className="border-r border-b border-gray-50 last:border-r-0 hover:bg-gray-50/50 transition-colors group relative">
              {i === 0 && (
                <div className="absolute top-2 left-2 z-10">
                  <span className="text-[10px] font-medium text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded">
                    Best Seller
                  </span>
                </div>
              )}
              {p.image ? (
                <div className="relative h-36 overflow-hidden bg-gray-50">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="h-36 bg-gray-50 flex items-center justify-center">
                  <span className="text-gray-300 text-sm">No image</span>
                </div>
              )}
              <div className="p-3">
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">{p.brand}</p>
                <p className="font-medium text-xs text-gray-800 group-hover:text-gray-900 transition-colors leading-tight mt-0.5 line-clamp-2">{p.name}</p>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="text-[9px] text-amber-400">&#9733;</span>
                  ))}
                  <span className="text-[9px] text-gray-400 ml-0.5">4.{5 + (i % 4)}</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="font-mono font-bold text-sm text-gray-900">{p.price}</span>
                  <span className="font-mono text-gray-400 line-through text-xs">{originalPrice}</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
