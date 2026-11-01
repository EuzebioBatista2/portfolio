import Image from "next/image";
import { useRef, useState, type FormEvent, type ChangeEvent } from "react";
import ActionIcon from "./ActionIcon";

type RegisterCommentsProps = { onSubmitted: () => void };

export default function RegisterComments({ onSubmitted }: RegisterCommentsProps) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [avatar, setAvatar] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  function chooseAvatar(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!/^image\/(jpeg|png|webp|gif)$/.test(file.type) || file.size > 3 * 1024 * 1024) {
      setMessage("Escolha uma imagem JPG, PNG, WebP ou GIF de até 3 MB.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = () => setAvatar(typeof reader.result === "string" ? reader.result : "");
    reader.onerror = () => setMessage("Não foi possível ler essa imagem.");
    reader.readAsDataURL(file);
  }

  async function submitComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    try {
      const result = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, comment, avatar: avatar || undefined }),
      });
      const payload = await result.json();
      if (!result.ok) throw new Error(payload.error || "Não foi possível enviar seu comentário.");

      setName("");
      setComment("");
      setAvatar("");
      if (fileInput.current) fileInput.current.value = "";
      setMessage("Obrigado por deixar seu feedback!");
      onSubmitted();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Não foi possível enviar seu comentário.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="comment-form" onSubmit={submitComment}>
      <h3>Deixe seu comentário</h3>
      <label htmlFor="comment-name">Nome</label>
      <input
        id="comment-name"
        name="name"
        autoComplete="name"
        maxLength={60}
        minLength={2}
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Seu nome"
      />
      <label htmlFor="comment-text">Comentário</label>
      <textarea
        id="comment-text"
        name="comment"
        maxLength={1000}
        minLength={4}
        required
        rows={4}
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="Escreva uma mensagem"
      />
      <div className="comment-form-footer">
        <div className="avatar-picker">
          {avatar && <Image src={avatar} width={36} height={36} alt="Prévia da imagem selecionada" unoptimized />}
          <label className="button button-outline" htmlFor="comment-avatar"><span className="button-label">{avatar ? "Trocar imagem" : "Adicionar imagem"}</span><ActionIcon name="upload" /></label>
          <input
            ref={fileInput}
            id="comment-avatar"
            name="avatar"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            onChange={chooseAvatar}
          />
        </div>
        <button className="button button-primary" type="submit" disabled={isSubmitting}>
          <span className="button-label">{isSubmitting ? "Enviando…" : "Enviar comentário"}</span><ActionIcon name="send" />
        </button>
      </div>
      {message && <p className="form-message" role="status">{message}</p>}
      <p className="form-hint">A imagem é opcional. JPG, PNG, WebP ou GIF até 3 MB.</p>
    </form>
  );
}
