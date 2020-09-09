import { Controller, Get, Param } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.model';

@Controller('api/v1/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getItems(): Item[] {
    return this.itemsService.getItems();
  }

  @Get('search/:word')
  searchItems(@Param('word') word: string): Item[] {
    return this.itemsService.searchItems(word);
  }
}
