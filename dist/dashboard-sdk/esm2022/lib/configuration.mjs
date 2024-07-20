export class Configuration {
    constructor(configurationParameters = {}) {
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
        this.encoder = configurationParameters.encoder;
        if (configurationParameters.encodeParam) {
            this.encodeParam = configurationParameters.encodeParam;
        }
        else {
            this.encodeParam = param => this.defaultEncodeParam(param);
        }
        if (configurationParameters.credentials) {
            this.credentials = configurationParameters.credentials;
        }
        else {
            this.credentials = {};
        }
        // init default cookie credential
        if (!this.credentials['cookie']) {
            this.credentials['cookie'] = () => {
                if (this.apiKeys === null || this.apiKeys === undefined) {
                    return undefined;
                }
                else {
                    return this.apiKeys['cookie'] || this.apiKeys['connect.sid'];
                }
            };
        }
    }
    /**
     * Select the correct content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param contentTypes - the array of content types that are available for selection
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderContentType(contentTypes) {
        if (contentTypes.length === 0) {
            return undefined;
        }
        const type = contentTypes.find((x) => this.isJsonMime(x));
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    }
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param accepts - the array of content types that are available for selection.
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderAccept(accepts) {
        if (accepts.length === 0) {
            return undefined;
        }
        const type = accepts.find((x) => this.isJsonMime(x));
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    }
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    isJsonMime(mime) {
        const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
    lookupCredential(key) {
        const value = this.credentials[key];
        return typeof value === 'function'
            ? value()
            : value;
    }
    defaultEncodeParam(param) {
        // This implementation exists as fallback for missing configuration
        // and for backwards compatibility to older typescript-angular generator versions.
        // It only works for the 'simple' parameter style.
        // Date-handling only works for the 'date-time' format.
        // All other styles and Date-formats are probably handled incorrectly.
        //
        // But: if that's all you need (i.e.: the most common use-case): no need for customization!
        const value = param.dataFormat === 'date-time' && param.value instanceof Date
            ? param.value.toISOString()
            : param.value;
        return encodeURIComponent(String(value));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2Rhc2hib2FyZC1zZGsvc3JjL2xpYi9jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DQSxNQUFNLE9BQU8sYUFBYTtJQWdDdEIsWUFBWSwwQkFBbUQsRUFBRTtRQUM3RCxJQUFJLENBQUMsT0FBTyxHQUFHLHVCQUF1QixDQUFDLE9BQU8sQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFHLHVCQUF1QixDQUFDLFFBQVEsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLHVCQUF1QixDQUFDLFFBQVEsQ0FBQztRQUNqRCxJQUFJLENBQUMsV0FBVyxHQUFHLHVCQUF1QixDQUFDLFdBQVcsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFHLHVCQUF1QixDQUFDLFFBQVEsQ0FBQztRQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLHVCQUF1QixDQUFDLGVBQWUsQ0FBQztRQUMvRCxJQUFJLENBQUMsT0FBTyxHQUFHLHVCQUF1QixDQUFDLE9BQU8sQ0FBQztRQUMvQyxJQUFJLHVCQUF1QixDQUFDLFdBQVcsRUFBRTtZQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLHVCQUF1QixDQUFDLFdBQVcsQ0FBQztTQUMxRDthQUNJO1lBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5RDtRQUNELElBQUksdUJBQXVCLENBQUMsV0FBVyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsdUJBQXVCLENBQUMsV0FBVyxDQUFDO1NBQzFEO2FBQ0k7WUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztTQUN6QjtRQUVELGlDQUFpQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsRUFBRTtnQkFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtvQkFDckQsT0FBTyxTQUFTLENBQUM7aUJBQ3BCO3FCQUFNO29CQUNILE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUNoRTtZQUNMLENBQUMsQ0FBQztTQUNMO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLHVCQUF1QixDQUFFLFlBQXNCO1FBQ2xELElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDM0IsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFFRCxNQUFNLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3BCLE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLGtCQUFrQixDQUFDLE9BQWlCO1FBQ3ZDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEIsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFFRCxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3BCLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNJLFVBQVUsQ0FBQyxJQUFZO1FBQzFCLE1BQU0sUUFBUSxHQUFXLElBQUksTUFBTSxDQUFDLCtEQUErRCxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFHLE9BQU8sSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLDZCQUE2QixDQUFDLENBQUM7SUFDMUcsQ0FBQztJQUVNLGdCQUFnQixDQUFDLEdBQVc7UUFDL0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVU7WUFDOUIsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNULENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDaEIsQ0FBQztJQUVPLGtCQUFrQixDQUFDLEtBQVk7UUFDbkMsbUVBQW1FO1FBQ25FLGtGQUFrRjtRQUNsRixrREFBa0Q7UUFDbEQsdURBQXVEO1FBQ3ZELHNFQUFzRTtRQUN0RSxFQUFFO1FBQ0YsMkZBQTJGO1FBRTNGLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLEtBQUssV0FBVyxJQUFJLEtBQUssQ0FBQyxLQUFLLFlBQVksSUFBSTtZQUN6RSxDQUFDLENBQUUsS0FBSyxDQUFDLEtBQWMsQ0FBQyxXQUFXLEVBQUU7WUFDckMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFFbEIsT0FBTyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUGFyYW1ldGVyQ29kZWMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBQYXJhbSB9IGZyb20gJy4vcGFyYW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzIHtcbiAgICAvKipcbiAgICAgKiAgQGRlcHJlY2F0ZWQgU2luY2UgNS4wLiBVc2UgY3JlZGVudGlhbHMgaW5zdGVhZFxuICAgICAqL1xuICAgIGFwaUtleXM/OiB7WyBrZXk6IHN0cmluZyBdOiBzdHJpbmd9O1xuICAgIHVzZXJuYW1lPzogc3RyaW5nO1xuICAgIHBhc3N3b3JkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqICBAZGVwcmVjYXRlZCBTaW5jZSA1LjAuIFVzZSBjcmVkZW50aWFscyBpbnN0ZWFkXG4gICAgICovXG4gICAgYWNjZXNzVG9rZW4/OiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcbiAgICBiYXNlUGF0aD86IHN0cmluZztcbiAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRha2VzIGNhcmUgb2YgZW5jb2RpbmcgcXVlcnktIGFuZCBmb3JtLXBhcmFtZXRlcnMuXG4gICAgICovXG4gICAgZW5jb2Rlcj86IEh0dHBQYXJhbWV0ZXJDb2RlYztcbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBtZXRob2QgZm9yIGVuY29kaW5nIHBhdGggcGFyYW1ldGVycyBpbiB2YXJpb3VzXG4gICAgICogPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9PQUkvT3BlbkFQSS1TcGVjaWZpY2F0aW9uL2Jsb2IvbWFpbi92ZXJzaW9ucy8zLjEuMC5tZCNzdHlsZS12YWx1ZXNcIj5zdHlsZXM8L2E+LlxuICAgICAqIDxwPlxuICAgICAqIFNlZSB7QGxpbmsgUkVBRE1FLm1kfSBmb3IgbW9yZSBkZXRhaWxzXG4gICAgICogPC9wPlxuICAgICAqL1xuICAgIGVuY29kZVBhcmFtPzogKHBhcmFtOiBQYXJhbSkgPT4gc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBrZXlzIGFyZSB0aGUgbmFtZXMgaW4gdGhlIHNlY3VyaXR5U2NoZW1lcyBzZWN0aW9uIG9mIHRoZSBPcGVuQVBJXG4gICAgICogZG9jdW1lbnQuIFRoZXkgc2hvdWxkIG1hcCB0byB0aGUgdmFsdWUgdXNlZCBmb3IgYXV0aGVudGljYXRpb25cbiAgICAgKiBtaW51cyBhbnkgc3RhbmRhcmQgcHJlZml4ZXMgc3VjaCBhcyAnQmFzaWMnIG9yICdCZWFyZXInLlxuICAgICAqL1xuICAgIGNyZWRlbnRpYWxzPzoge1sga2V5OiBzdHJpbmcgXTogc3RyaW5nIHwgKCgpID0+IHN0cmluZyB8IHVuZGVmaW5lZCl9O1xufVxuXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XG4gICAgLyoqXG4gICAgICogIEBkZXByZWNhdGVkIFNpbmNlIDUuMC4gVXNlIGNyZWRlbnRpYWxzIGluc3RlYWRcbiAgICAgKi9cbiAgICBhcGlLZXlzPzoge1sga2V5OiBzdHJpbmcgXTogc3RyaW5nfTtcbiAgICB1c2VybmFtZT86IHN0cmluZztcbiAgICBwYXNzd29yZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiAgQGRlcHJlY2F0ZWQgU2luY2UgNS4wLiBVc2UgY3JlZGVudGlhbHMgaW5zdGVhZFxuICAgICAqL1xuICAgIGFjY2Vzc1Rva2VuPzogc3RyaW5nIHwgKCgpID0+IHN0cmluZyk7XG4gICAgYmFzZVBhdGg/OiBzdHJpbmc7XG4gICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUYWtlcyBjYXJlIG9mIGVuY29kaW5nIHF1ZXJ5LSBhbmQgZm9ybS1wYXJhbWV0ZXJzLlxuICAgICAqL1xuICAgIGVuY29kZXI/OiBIdHRwUGFyYW1ldGVyQ29kZWM7XG4gICAgLyoqXG4gICAgICogRW5jb2Rpbmcgb2YgdmFyaW91cyBwYXRoIHBhcmFtZXRlclxuICAgICAqIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vT0FJL09wZW5BUEktU3BlY2lmaWNhdGlvbi9ibG9iL21haW4vdmVyc2lvbnMvMy4xLjAubWQjc3R5bGUtdmFsdWVzXCI+c3R5bGVzPC9hPi5cbiAgICAgKiA8cD5cbiAgICAgKiBTZWUge0BsaW5rIFJFQURNRS5tZH0gZm9yIG1vcmUgZGV0YWlsc1xuICAgICAqIDwvcD5cbiAgICAgKi9cbiAgICBlbmNvZGVQYXJhbTogKHBhcmFtOiBQYXJhbSkgPT4gc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBrZXlzIGFyZSB0aGUgbmFtZXMgaW4gdGhlIHNlY3VyaXR5U2NoZW1lcyBzZWN0aW9uIG9mIHRoZSBPcGVuQVBJXG4gICAgICogZG9jdW1lbnQuIFRoZXkgc2hvdWxkIG1hcCB0byB0aGUgdmFsdWUgdXNlZCBmb3IgYXV0aGVudGljYXRpb25cbiAgICAgKiBtaW51cyBhbnkgc3RhbmRhcmQgcHJlZml4ZXMgc3VjaCBhcyAnQmFzaWMnIG9yICdCZWFyZXInLlxuICAgICAqL1xuICAgIGNyZWRlbnRpYWxzOiB7WyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nIHwgdW5kZWZpbmVkKX07XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uUGFyYW1ldGVyczogQ29uZmlndXJhdGlvblBhcmFtZXRlcnMgPSB7fSkge1xuICAgICAgICB0aGlzLmFwaUtleXMgPSBjb25maWd1cmF0aW9uUGFyYW1ldGVycy5hcGlLZXlzO1xuICAgICAgICB0aGlzLnVzZXJuYW1lID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMudXNlcm5hbWU7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBjb25maWd1cmF0aW9uUGFyYW1ldGVycy5wYXNzd29yZDtcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzLmFjY2Vzc1Rva2VuO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMuYmFzZVBhdGg7XG4gICAgICAgIHRoaXMud2l0aENyZWRlbnRpYWxzID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMud2l0aENyZWRlbnRpYWxzO1xuICAgICAgICB0aGlzLmVuY29kZXIgPSBjb25maWd1cmF0aW9uUGFyYW1ldGVycy5lbmNvZGVyO1xuICAgICAgICBpZiAoY29uZmlndXJhdGlvblBhcmFtZXRlcnMuZW5jb2RlUGFyYW0pIHtcbiAgICAgICAgICAgIHRoaXMuZW5jb2RlUGFyYW0gPSBjb25maWd1cmF0aW9uUGFyYW1ldGVycy5lbmNvZGVQYXJhbTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW5jb2RlUGFyYW0gPSBwYXJhbSA9PiB0aGlzLmRlZmF1bHRFbmNvZGVQYXJhbShwYXJhbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzLmNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMuY3JlZGVudGlhbHM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0ge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbml0IGRlZmF1bHQgY29va2llIGNyZWRlbnRpYWxcbiAgICAgICAgaWYgKCF0aGlzLmNyZWRlbnRpYWxzWydjb29raWUnXSkge1xuICAgICAgICAgICAgdGhpcy5jcmVkZW50aWFsc1snY29va2llJ10gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXBpS2V5cyA9PT0gbnVsbCB8fCB0aGlzLmFwaUtleXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwaUtleXNbJ2Nvb2tpZSddIHx8IHRoaXMuYXBpS2V5c1snY29ubmVjdC5zaWQnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IHRoZSBjb3JyZWN0IGNvbnRlbnQtdHlwZSB0byB1c2UgZm9yIGEgcmVxdWVzdC5cbiAgICAgKiBVc2VzIHtAbGluayBDb25maWd1cmF0aW9uI2lzSnNvbk1pbWV9IHRvIGRldGVybWluZSB0aGUgY29ycmVjdCBjb250ZW50LXR5cGUuXG4gICAgICogSWYgbm8gY29udGVudCB0eXBlIGlzIGZvdW5kIHJldHVybiB0aGUgZmlyc3QgZm91bmQgdHlwZSBpZiB0aGUgY29udGVudFR5cGVzIGlzIG5vdCBlbXB0eVxuICAgICAqIEBwYXJhbSBjb250ZW50VHlwZXMgLSB0aGUgYXJyYXkgb2YgY29udGVudCB0eXBlcyB0aGF0IGFyZSBhdmFpbGFibGUgZm9yIHNlbGVjdGlvblxuICAgICAqIEByZXR1cm5zIHRoZSBzZWxlY3RlZCBjb250ZW50LXR5cGUgb3IgPGNvZGU+dW5kZWZpbmVkPC9jb2RlPiBpZiBubyBzZWxlY3Rpb24gY291bGQgYmUgbWFkZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0SGVhZGVyQ29udGVudFR5cGUgKGNvbnRlbnRUeXBlczogc3RyaW5nW10pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoY29udGVudFR5cGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBjb250ZW50VHlwZXMuZmluZCgoeDogc3RyaW5nKSA9PiB0aGlzLmlzSnNvbk1pbWUoeCkpO1xuICAgICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGVudFR5cGVzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgY29ycmVjdCBhY2NlcHQgY29udGVudC10eXBlIHRvIHVzZSBmb3IgYSByZXF1ZXN0LlxuICAgICAqIFVzZXMge0BsaW5rIENvbmZpZ3VyYXRpb24jaXNKc29uTWltZX0gdG8gZGV0ZXJtaW5lIHRoZSBjb3JyZWN0IGFjY2VwdCBjb250ZW50LXR5cGUuXG4gICAgICogSWYgbm8gY29udGVudCB0eXBlIGlzIGZvdW5kIHJldHVybiB0aGUgZmlyc3QgZm91bmQgdHlwZSBpZiB0aGUgY29udGVudFR5cGVzIGlzIG5vdCBlbXB0eVxuICAgICAqIEBwYXJhbSBhY2NlcHRzIC0gdGhlIGFycmF5IG9mIGNvbnRlbnQgdHlwZXMgdGhhdCBhcmUgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb24uXG4gICAgICogQHJldHVybnMgdGhlIHNlbGVjdGVkIGNvbnRlbnQtdHlwZSBvciA8Y29kZT51bmRlZmluZWQ8L2NvZGU+IGlmIG5vIHNlbGVjdGlvbiBjb3VsZCBiZSBtYWRlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3RIZWFkZXJBY2NlcHQoYWNjZXB0czogc3RyaW5nW10pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoYWNjZXB0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0eXBlID0gYWNjZXB0cy5maW5kKCh4OiBzdHJpbmcpID0+IHRoaXMuaXNKc29uTWltZSh4KSk7XG4gICAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2NlcHRzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBnaXZlbiBNSU1FIGlzIGEgSlNPTiBNSU1FLlxuICAgICAqIEpTT04gTUlNRSBleGFtcGxlczpcbiAgICAgKiAgIGFwcGxpY2F0aW9uL2pzb25cbiAgICAgKiAgIGFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGOFxuICAgICAqICAgQVBQTElDQVRJT04vSlNPTlxuICAgICAqICAgYXBwbGljYXRpb24vdm5kLmNvbXBhbnkranNvblxuICAgICAqIEBwYXJhbSBtaW1lIC0gTUlNRSAoTXVsdGlwdXJwb3NlIEludGVybmV0IE1haWwgRXh0ZW5zaW9ucylcbiAgICAgKiBAcmV0dXJuIFRydWUgaWYgdGhlIGdpdmVuIE1JTUUgaXMgSlNPTiwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBpc0pzb25NaW1lKG1pbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBqc29uTWltZTogUmVnRXhwID0gbmV3IFJlZ0V4cCgnXihhcHBsaWNhdGlvblxcL2pzb258W147LyBcXHRdK1xcL1teOy8gXFx0XStbK11qc29uKVsgXFx0XSooOy4qKT8kJywgJ2knKTtcbiAgICAgICAgcmV0dXJuIG1pbWUgIT09IG51bGwgJiYgKGpzb25NaW1lLnRlc3QobWltZSkgfHwgbWltZS50b0xvd2VyQ2FzZSgpID09PSAnYXBwbGljYXRpb24vanNvbi1wYXRjaCtqc29uJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvb2t1cENyZWRlbnRpYWwoa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY3JlZGVudGlhbHNba2V5XTtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyB2YWx1ZSgpXG4gICAgICAgICAgICA6IHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVmYXVsdEVuY29kZVBhcmFtKHBhcmFtOiBQYXJhbSk6IHN0cmluZyB7XG4gICAgICAgIC8vIFRoaXMgaW1wbGVtZW50YXRpb24gZXhpc3RzIGFzIGZhbGxiYWNrIGZvciBtaXNzaW5nIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgLy8gYW5kIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB0byBvbGRlciB0eXBlc2NyaXB0LWFuZ3VsYXIgZ2VuZXJhdG9yIHZlcnNpb25zLlxuICAgICAgICAvLyBJdCBvbmx5IHdvcmtzIGZvciB0aGUgJ3NpbXBsZScgcGFyYW1ldGVyIHN0eWxlLlxuICAgICAgICAvLyBEYXRlLWhhbmRsaW5nIG9ubHkgd29ya3MgZm9yIHRoZSAnZGF0ZS10aW1lJyBmb3JtYXQuXG4gICAgICAgIC8vIEFsbCBvdGhlciBzdHlsZXMgYW5kIERhdGUtZm9ybWF0cyBhcmUgcHJvYmFibHkgaGFuZGxlZCBpbmNvcnJlY3RseS5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gQnV0OiBpZiB0aGF0J3MgYWxsIHlvdSBuZWVkIChpLmUuOiB0aGUgbW9zdCBjb21tb24gdXNlLWNhc2UpOiBubyBuZWVkIGZvciBjdXN0b21pemF0aW9uIVxuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcGFyYW0uZGF0YUZvcm1hdCA9PT0gJ2RhdGUtdGltZScgJiYgcGFyYW0udmFsdWUgaW5zdGFuY2VvZiBEYXRlXG4gICAgICAgICAgICA/IChwYXJhbS52YWx1ZSBhcyBEYXRlKS50b0lTT1N0cmluZygpXG4gICAgICAgICAgICA6IHBhcmFtLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHZhbHVlKSk7XG4gICAgfVxufVxuIl19