/** Captioned photo cards: [{ src, width, height, alt, title, text, c }] */
export default function PhotoGrid({ items }) {
  return (
    <div className="photo-grid">
      {items.map((p) => (
        <figure className="photo-card" key={p.src} style={p.c ? { "--pc": p.c } : undefined}>
          <img src={p.src} alt={p.alt} width={p.width} height={p.height} loading="lazy" decoding="async" />
          <figcaption>
            {p.title && <b>{p.title}</b>}
            <span>{p.text}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
