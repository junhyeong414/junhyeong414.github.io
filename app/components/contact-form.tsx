"use client";

import { Check, PaperPlaneTilt } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [ready, setReady] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setReady(true);
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>이름<input name="name" autoComplete="name" required placeholder="이름" /></label>
      <label>이메일<input name="email" type="email" autoComplete="email" required placeholder="you@organization.com" /></label>
      <label>소속<input name="organization" autoComplete="organization" required placeholder="기업, 연구실 또는 기관" /></label>
      <label>문의 유형
        <select name="inquiryType" required defaultValue="">
          <option value="" disabled>문의 유형 선택</option>
          <option>연구 협업</option>
          <option>소재·공정 R&D</option>
          <option>채용 기회</option>
          <option>산업 협력</option>
          <option>기타</option>
        </select>
      </label>
      <label className="full-field">메시지<textarea name="message" required rows={5} placeholder="협업 또는 연구 과제에 대해 알려주세요." /></label>
      <button className="button button-primary" type="submit">
        {ready ? <><Check weight="bold" /> 입력 확인 완료</> : <>문의 내용 확인 <PaperPlaneTilt weight="bold" /></>}
      </button>
      {ready && <p className="form-status" role="status">입력 내용을 확인했습니다. 실제 전송 endpoint는 아직 TODO입니다.</p>}
    </form>
  );
}
