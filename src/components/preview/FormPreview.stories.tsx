import type { Meta, StoryObj } from "@storybook/react";
import { FormPreview } from "./FormPreview";
import { initialFormData } from "@/types/form";
import { ReadingStatus } from "@/types/status";

const meta: Meta<typeof FormPreview> = {
  title: "Components/FormPreview",
  component: FormPreview,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    data: {
      control: "object",
      description: "폼 데이터",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 빈 데이터
export const Empty: Story = {
  args: {
    data: initialFormData,
  },
};

// 기본 데이터
export const Default: Story = {
  args: {
    data: {
      step: 1,
      bookInfo: {
        title: "클린 코드",
        publishedDate: "2013-12-24",
        totalPages: 584,
        readingStatus: ReadingStatus.READ,
        startDate: "2024-01-15",
        endDate: "2024-02-20",
      },
      ratingInfo: {
        rating: 4.5,
        isRecommended: true,
      },
      reviewInfo: {
        content:
          "개발자라면 꼭 읽어야 할 필수 도서입니다. 코드의 품질을 높이는 방법과 깔끔한 코드 작성법에 대해 자세히 설명하고 있습니다.",
      },
      quoteInfo: {
        quotes: [
          {
            id: "1",
            content:
              "함수는 한 가지를 해야 한다. 그 한 가지를 잘 해야 한다. 그 한 가지만을 해야 한다.",
            pageNumber: 35,
          },
          {
            id: "2",
            content: "코드는 항상 읽기 쉬워야 한다.",
            pageNumber: 42,
          },
        ],
      },
      visibilityInfo: {
        isPublic: true,
      },
    },
  },
};

// 읽고 싶은 책 상태
export const WantToRead: Story = {
  args: {
    data: {
      step: 1,
      bookInfo: {
        title: "리팩토링",
        publishedDate: "2018-07-01",
        totalPages: 448,
        readingStatus: ReadingStatus.WANT_TO_READ,
      },
      ratingInfo: {
        rating: 0,
        isRecommended: false,
      },
      reviewInfo: {
        content: "",
      },
      quoteInfo: {
        quotes: [],
      },
      visibilityInfo: {
        isPublic: false,
      },
    },
  },
};

// 읽는 중 상태
export const CurrentlyReading: Story = {
  args: {
    data: {
      step: 2,
      bookInfo: {
        title: "도메인 주도 설계",
        publishedDate: "2011-06-30",
        totalPages: 520,
        readingStatus: ReadingStatus.READING,
        startDate: "2024-03-01",
      },
      ratingInfo: {
        rating: 0,
        isRecommended: false,
      },
      reviewInfo: {
        content: "",
      },
      quoteInfo: {
        quotes: [
          {
            id: "1",
            content: "도메인 모델은 비즈니스 로직의 핵심이다.",
            pageNumber: 15,
          },
        ],
      },
      visibilityInfo: {
        isPublic: true,
      },
    },
  },
};

// 낮은 별점
export const LowRating: Story = {
  args: {
    data: {
      step: 3,
      bookInfo: {
        title: "실패한 프로젝트 사례",
        publishedDate: "2023-01-01",
        totalPages: 300,
        readingStatus: ReadingStatus.READ,
        startDate: "2024-01-01",
        endDate: "2024-01-10",
      },
      ratingInfo: {
        rating: 1,
        isRecommended: false,
      },
      reviewInfo: {
        content:
          "이 책은 정말 실망스러웠습니다. 내용이 부실하고 실용적이지 않았습니다. 시간 낭비라고 생각합니다. 다른 책을 추천합니다.",
      },
      quoteInfo: {
        quotes: [],
      },
      visibilityInfo: {
        isPublic: false,
      },
    },
  },
};

// 높은 별점
export const HighRating: Story = {
  args: {
    data: {
      step: 5,
      bookInfo: {
        title: "완벽한 프로그래밍",
        publishedDate: "2024-01-01",
        totalPages: 600,
        readingStatus: ReadingStatus.READ,
        startDate: "2024-02-01",
        endDate: "2024-03-15",
      },
      ratingInfo: {
        rating: 5,
        isRecommended: true,
      },
      reviewInfo: {
        content:
          "정말 훌륭한 책입니다! 프로그래밍의 모든 측면을 다루고 있으며, 실무에서 바로 적용할 수 있는 팁들이 가득합니다. 모든 개발자에게 강력히 추천합니다.",
      },
      quoteInfo: {
        quotes: [
          {
            id: "1",
            content: "코드의 품질은 개발자의 품질을 반영한다.",
            pageNumber: 25,
          },
          {
            id: "2",
            content: "테스트는 코드의 안전장치다.",
            pageNumber: 150,
          },
          {
            id: "3",
            content: "리팩토링은 지속적인 개선의 핵심이다.",
            pageNumber: 300,
          },
        ],
      },
      visibilityInfo: {
        isPublic: true,
      },
    },
  },
};

// 보류 중 상태
export const OnHold: Story = {
  args: {
    data: {
      step: 1,
      bookInfo: {
        title: "복잡한 알고리즘",
        publishedDate: "2023-06-01",
        totalPages: 800,
        readingStatus: ReadingStatus.ON_HOLD,
        startDate: "2024-01-01",
      },
      ratingInfo: {
        rating: 0,
        isRecommended: false,
      },
      reviewInfo: {
        content: "",
      },
      quoteInfo: {
        quotes: [
          {
            id: "1",
            content: "알고리즘의 복잡도는 성능에 직접적인 영향을 미친다.",
            pageNumber: 50,
          },
        ],
      },
      visibilityInfo: {
        isPublic: true,
      },
    },
  },
};
