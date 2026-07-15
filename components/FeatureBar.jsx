import {
  Truck,
  ShieldCheck,
  QrCode,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    text: "Quick delivery around Pokhara",
  },
  {
    icon: ShieldCheck,
    title: "Quality Products",
    text: "Trusted puja materials",
  },
  {
    icon: QrCode,
    title: "QR Payment",
    text: "Pay instantly via eSewa, Khalti & Bank QR",
  },
  {
    icon: MapPin,
    title: "Pokhara Store",
    text: "Visit our physical shop",
  },
];

export default function FeatureBar() {
  return (
    <section className="py-10 border-y bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="flex flex-col items-center">
              <Icon className="w-8 h-8 text-orange-600 mb-3" />

              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}