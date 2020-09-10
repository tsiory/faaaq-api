import { Injectable } from '@nestjs/common';
import { Item } from './item.model';
import { ALL_ITEMS } from './data/mock.db.js';

import { v4 as generateId } from 'uuid';

@Injectable()
export class ItemsService {
  allItems: Item[] = [];

  private populateAllItems() {
    ALL_ITEMS.forEach(item => {
      this.allItems.push({
        id: generateId(),
        question: item.question,
        answer: item.answer,
      });
    });
  }

  /**
   * Get all items.
   */
  getItems(): Item[] {
    if (this.allItems.length === 0) {
      this.populateAllItems();
    }

    return [...this.allItems];
  }

  /**
   * Permit to search some words inside answers and questions.
   * @param words
   */
  searchItems(words: string): Item[] {
    if (this.allItems.length === 0) {
      this.populateAllItems();
    }

    const matchAnswers = this.allItems.filter(item =>
      item.answer
        .trim()
        .toLowerCase()
        .includes(words.trim().toLowerCase()),
    );

    const matchQuestions = this.allItems.filter(item =>
      item.question
        .trim()
        .toLowerCase()
        .includes(words.trim().toLowerCase()),
    );

    return [...matchAnswers, ...matchQuestions];
  }
}
