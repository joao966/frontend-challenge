import * as S from '@/style/components/catalog/molecules/tab';
import { useState } from 'react';

export function Tab({ components }: any) {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <S.TabWapper>
      {components.map((c: any, i: number) => (
        <div key={i}>
          <div onClick={() => setCurrentTab(i)}>
            {c.title}
          </div>

          <div>
            {currentTab === i && c.content}
          </div>
        </div>
      ))}
    </S.TabWapper>
  );
};
