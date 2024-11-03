import { formateDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author: { _id: author_id, name },
    category,
    image,
    title,
    _id,
    description,
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formateDate(_createdAt)}</p>
        <div className="flex gap-5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-10-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author_id}`}>
            <p className="text-10-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-20-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author_id}`}>
          <Image
            src="https://placehold.co/600x400"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        <img src={image} alt="placeholder" className="startup-card_img" />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn">
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};