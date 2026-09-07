export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-brand-black border-t border-brand-gold/20">
      <a
        href="tel:0658677363"
        className="flex items-center justify-center py-3 text-brand-gold font-medium"
      >
        Call 065 867 7363
      </a>
    </div>
  )
}
