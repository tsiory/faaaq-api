import { Injectable } from '@nestjs/common';
import { Item } from './item.model';
import { ALL_ITEMS } from './data/mock.db.js';

@Injectable()
export class ItemsService {
  /**
   * Get all items.
   */
  getItems(): Item[] {
    return ALL_ITEMS;
  }

  /**
   * Permit to search some words inside answers and questions.
   * @param word
   */
  searchItems(word: string): Item[] {
    const matchAnswers = ALL_ITEMS.filter(item =>
      item.answer
        .trim()
        .toLowerCase()
        .includes(word.trim().toLowerCase()),
    );

    const matchQuestions = ALL_ITEMS.filter(item =>
      item.question
        .trim()
        .toLowerCase()
        .includes(word.trim().toLowerCase()),
    );

    return [...matchAnswers, ...matchQuestions];
  }
}
