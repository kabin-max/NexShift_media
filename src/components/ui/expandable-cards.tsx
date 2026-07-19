'use client';
import { useState, useEffect } from 'react';
import { motion, Variants } from 'motion/react';
import { cn } from '@/lib/utils';

interface ExpandableCard {
  id: number;
  content: React.ReactNode;
}

interface ExpandableCardsProps {
  cards: ExpandableCard[];
  defaultExpanded?: number;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export default function ExpandableCards({
  cards,
  defaultExpanded = 1,
  autoPlay = false,
  interval = 3000,
  className,
}: ExpandableCardsProps) {
  const [expandedId, setExpandedId] = useState<number>(defaultExpanded);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoPlay || isHovered) return;
    const timer = setInterval(() => {
      setExpandedId((prev) => {
        const currentIndex = cards.findIndex(c => c.id === prev);
        const nextIndex = (currentIndex + 1) % cards.length;
        return cards[nextIndex].id;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, isHovered, cards, interval]);

  const cardVariants: Variants = {
    expanded: {
      flex: 6,
      transition: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] },
    },
    collapsed: {
      flex: 1,
      transition: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] },
    },
  };

  return (
    <div 
      className={cn('flex gap-3 sm:gap-4 w-full h-full', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {cards.map((card) => {
        const isExpanded = expandedId === card.id;

        return (
          <motion.div
            key={card.id}
            className='relative h-full overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer'
            variants={cardVariants}
            initial={isExpanded ? 'expanded' : 'collapsed'}
            animate={isExpanded ? 'expanded' : 'collapsed'}
            onMouseEnter={() => setExpandedId(card.id)}
          >
            <div className='absolute inset-0'>{card.content}</div>

            {!isExpanded && (
              <motion.div
                className='absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300'
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
