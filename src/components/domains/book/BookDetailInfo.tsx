"use client";

import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

const InfoListItem = ({ title, des, children }) => {
  return (
    <div className="flex gap-[6px]">
      <span className="text-[#9CABBB]">{title}</span>
      {des && <p>{des}</p>}
      {children}
    </div>
  );
};

export default function BookDetailInfo({ book }) {
  return (
    <>
      <div className="relative w-full h-[290px]">
        <div className="w-full h-full">
          <Image
            src={book.thumbnail}
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(217,217,217,0.2)] backdrop-blur" />
        <div className="absolute bottom-6 left-1/2 translate-x-[-50%] w-[124px] h-[181px]">
          <Image
            src={book.thumbnail}
            alt=""
            layout="fill"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
      {/* bookInfo */}
      <div>
        <div className="flex flex-col gap-3 px-5 py-6">
          <p className="font-semibold text-2xl">{book.title}</p>
          <InfoListItem title="저자">
            <div className="flex gap-1">
              {book.authors.map((author, index) => (
                <span key={`${author}-${index}`}>{author}</span>
              ))}
            </div>
          </InfoListItem>
          <InfoListItem title="출판사" des={book.publisher} />
          <InfoListItem title="출판일" des={book.datetime?.slice(0, 10)} />
          <InfoListItem title="설명" des={book.contents} />
          <InfoListItem title="가격" des={book.price} />
          <InfoListItem title="상태" des={book.status} />
          <Link href={book.url} target="_blank" rel="noopener noreferrer">
            다음에서 자세히 보기
          </Link>
        </div>
        <button
          onClick={() => console.log(book)}
          className="flex items-center justify-center gap-1 border-t border-[#f1f1f1] py-3 w-full"
        >
          <span>더보기</span>
          <MdKeyboardArrowDown />
        </button>
      </div>

      <div className="bg-[#F8F9FD] h-[14px] border-t border-b border-[#f1f1f1]" />
      {/* 나의 리뷰 */}
      <div>
        <div className="flex justify-between border-b border-[#F5F7FA] p-5">
          <div className="font-semibold">⭐️ ⭐️ ⭐️ ⭐️ ⭐️ 5.0</div>
          <div className="flex items-center justify-center gap-1">
            <span>나의 리뷰</span>
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className="flex justify-between border-b border-[#F5F7FA] p-5">
          <div className="font-semibold">나의 문장 수집</div>
          <div className="flex items-center justify-center gap-1">
            <span>5개</span>
            <MdKeyboardArrowRight />
          </div>
        </div>
      </div>

      <div className="bg-[#F8F9FD] h-[14px] border-t border-b border-[#f1f1f1]" />

      {/* 다른 사람 리뷰 */}
      <div>
        <div className="flex justify-between border-b border-[#F5F7FA] p-5">
          <div className="flex items-center gap-2 font-semibold">
            <p>이 책이 담긴 리뷰</p>
            <span className="text-[#FCC33C]">15</span>
          </div>
          <button>
            <MdKeyboardArrowRight />
          </button>
        </div>
        <div className="flex justify-between border-b border-[#F5F7FA] p-5">
          <div className="flex items-center gap-2 font-semibold">
            <p>이 책이 담긴 문장 수집</p>
            <span className="text-[#FCC33C]">127</span>
          </div>
          <button>
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
