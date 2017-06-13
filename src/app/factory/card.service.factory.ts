import { CardService } from './../components/cards/card.service';
import { UserService } from './../services/user.service';
import { LoggerService } from './../services/logger.service';

export let cardServiceFactory = (_loggerService:LoggerService, _userService: UserService) => {
    return new CardService(_loggerService, _userService.isAuthenticated)
};