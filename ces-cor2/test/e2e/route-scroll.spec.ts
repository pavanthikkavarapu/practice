import {browser, element, by, protractor, ElementFinder} from 'protractor';
import {Util as Closeness} from '../util';
import {ILocation,  promise} from 'selenium-webdriver';

describe('Route Scroll page', () => {

    beforeEach(() => {
        browser.get('/router');
    });

    function getScrollPos(): promise.Promise<number> {
        return browser.driver.executeScript('return Math.round(window.pageYOffset);');
    }

    it('should scroll open the new route and scroll to the target heading', () => {
        let target: ElementFinder = element(by.css('#head7'));
        let trigger: ElementFinder = element(by.css('#differentRouteScroll'));

        trigger.getAttribute('routerLink').then(function (routerLink: string) {
            trigger.sendKeys(protractor.Key.ENTER).then(() => {
                expect(browser.getCurrentUrl()).toContain(routerLink);
                target.getLocation().then((headingLocation: ILocation) => {
                    browser.sleep(1250).then(() => {
                        getScrollPos().then((pos: number) => {
                            expect(pos).toBeCloseTo(Math.round(headingLocation.y), Closeness.ofByOne);
                        });
                    });
                });
            });
        });
    });

    it('should scroll open the /simple route from home and scroll to the target heading', () => {
        browser.get('/');
        let target: ElementFinder = element(by.css('#head3'));
        let trigger: ElementFinder = element(by.css('#demoScroll2'));

        trigger.getAttribute('routerLink').then(function (routerLink: string) {
            trigger.sendKeys(protractor.Key.ENTER).then(() => {
                expect(browser.getCurrentUrl()).toContain(routerLink);
                target.getLocation().then((headingLocation: ILocation) => {
                    browser.sleep(1250).then(() => {
                        getScrollPos().then((pos: number) => {
                            expect(pos).toBeCloseTo(Math.round(headingLocation.y), Closeness.ofByOne);
                        });
                    });
                });
            });
        });
    });

    it('should scroll to seventh heading when directive has routerLink pointing to current route (variant 1)', () => {
        let target: ElementFinder = element(by.css('#head7'));
        let trigger: ElementFinder = element(by.css('#currentRouteScroll1'));
        target.getLocation().then((headingLocation: ILocation) => {
            getScrollPos().then((initialPos: number) => {
                expect(initialPos).toEqual(0);
                trigger.sendKeys(protractor.Key.ENTER).then(() => {
                    browser.sleep(1250).then(() => {
                        getScrollPos().then((pos: number) => {
                            expect(pos).toBeCloseTo(Math.round(headingLocation.y), Closeness.ofByOne);
                        });
                    });
                });
            });
        });
    });

    it('should scroll to seventh heading when directive has routerLink pointing to current route (variant 2)', () => {
        let target: ElementFinder = element(by.css('#head7'));
        let trigger: ElementFinder = element(by.css('#currentRouteScroll2'));
        target.getLocation().then((headingLocation: ILocation) => {
            getScrollPos().then((initialPos: number) => {
                expect(initialPos).toEqual(0);
                trigger.sendKeys(protractor.Key.ENTER).then(() => {
                    browser.sleep(1250).then(() => {
                        getScrollPos().then((pos: number) => {
                            expect(pos).toBeCloseTo(Math.round(headingLocation.y), Closeness.ofByOne);
                        });
                    });
                });
            });
        });
    });

    it('should scroll to seventh heading when directive has routerLink pointing to current route (variant 3)', () => {
        let target: ElementFinder = element(by.css('#head7'));
        let trigger: ElementFinder = element(by.css('#currentRouteScroll3'));
        target.getLocation().then((headingLocation: ILocation) => {
            getScrollPos().then((initialPos: number) => {
                expect(initialPos).toEqual(0);
                trigger.sendKeys(protractor.Key.ENTER).then(() => {
                    browser.sleep(1250).then(() => {
                        getScrollPos().then((pos: number) => {
                            expect(pos).toBeCloseTo(Math.round(headingLocation.y), Closeness.ofByOne);
                        });
                    });
                });
            });
        });
    });
});
